<?php

namespace ForestersFinancial\FliacIllustrations\Application;

class AssetFingerprinter
{
    private $documentRoot;

    public function __construct($documentRoot)
    {
        $this->documentRoot = $documentRoot;
    }

    public function fingerprint($path)
    {
        $fullPath = $this->documentRoot . $path;

        if (!file_exists($fullPath)) {
            throw new \InvalidArgumentException("Trying to fingerprint missing file: {$path}");
        }

        return $path . '?t=' . filemtime($fullPath);
    }
}
