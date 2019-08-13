<?php

namespace ForestersFinancial\FliacIllustrations\Service;

class WebToServiceDecorator
{
    private $input;
    private $mapping;
    private $output;

    public function __construct(array $input = [])
    {
        $this->input = $input;
        $this->mapping = WebToServiceMap::WEB_TO_SERVICE_MAP;
        $this->initialize();
        $this->map();
    }

    public function get()
    {
        return $this->output;
    }

    private function map()
    {
        foreach ($this->input as $key => $value) {
            if (isset($this->mapping[$key])) {
                $this->output[$this->mapping[$key]] = $value;
            } else {
                $this->output[$key] = $value;
            }
        }
    }

    private function initialize()
    {
        foreach ($this->mapping as $value) {
            $this->output[$value] = '';
        }
    }
}
