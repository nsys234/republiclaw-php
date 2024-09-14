<?php
	/**
	 * APP Function file
	 **/
	
	/**
	 * @param string $source: relative path to the image
	 * Saves back into the same destination as $source
	 * @param int $quality of output: 0 is worst, 100 is best, defaults to 85
	 * @return void
	 * Requires php exif and gd extensions
	 * Usage:
	 * webpImage('images/image.png', true ); to delete source image from directory
	 * webpImage('images/image.png', false ); to retain source image in directory
	 */
	function sanitize_output($buffer) {

        $search = array(
            '/\>[^\S ]+/s',     // strip whitespaces after tags, except space
            '/[^\S ]+\</s',     // strip whitespaces before tags, except space
            '/(\s)+/s',         // shorten multiple whitespace sequences
            '/<!--(.|\s)*?-->/' // Remove HTML comments
        );
    
        $replace = array(
            '>',
            '<',
            '\\1',
            ''
        );
    
        $buffer = preg_replace($search, $replace, $buffer);
    
        return $buffer;
    }
    
    //ob_start("sanitize_output");

	function webpImage( $source, int $quality = 85, $removeOld = false )
    {
        $dir = pathinfo($source, PATHINFO_DIRNAME);
        $name = pathinfo($source, PATHINFO_FILENAME);
        $destination = $dir . DIRECTORY_SEPARATOR . $name . '.webp';
        $info = getimagesize($source);
        $isAlpha = false;
        if ($info['mime'] == 'image/jpeg')
            $image = imagecreatefromjpeg($source);
        elseif ($isAlpha = $info['mime'] == 'image/gif') {
            $image = imagecreatefromgif($source);
        } elseif ($isAlpha = $info['mime'] == 'image/png') {
            $image = imagecreatefrompng($source);
        } else {
            return $source;
        }
        if ($isAlpha) {
            imagepalettetotruecolor($image);
            imagealphablending($image, true);
            imagesavealpha($image, true);
        }
        imagewebp($image, $destination, $quality);

        if ($removeOld)
            unlink($source);

        return $destination;
    }
?>