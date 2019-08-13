<?php

namespace ForestersFinancial\FliacIllustrations\Service;

use PHPUnit\Framework\TestCase;

class ServiceToWebDecoratorTest extends TestCase
{
    public $emptyComparisonArray;

    public function testAnEmptyArrayAsInput()
    {
        $mapping = new ServiceToWebDecorator();

        $this->assertEquals(
            $this->emptyComparisonArray,
            $mapping->get(),
            'Making sure we are getting what we thing we are getting with empty input'
        );
    }

    public function testAPartiallyPopulatedArrayAsInput()
    {
        $mapping = new ServiceToWebDecorator($this->partiallyMappedInputArray);

        $this->assertEquals(
            $this->partiallyMappedComparisonArray,
            $mapping->get(),
            'Making sure we are getting what we thing we are getting with empty input'
        );
    }

    public function setUp()
    {
        $this->emptyComparisonArray = [
            'product' => '',
            'name' => '',
            'state' => '',
            'gender' => '',
            'age' => '',
            'premClass' => '',
            'faceAmount' => '',
            'premium' => '',
            'calcFaceAmount' => '',
            'calcPremium' => '',
            'premMode' => '',
            'substdRating' => '',
            'fixedPct' => '',
            'adbRider' => '',
            'adbFace' => '',
            'adbEqualface' => '',
            'termRider' => '',
            'termYears' => '',
            'termFace' => '',
            'termMultiple' => '',
            'waiverRider' => '',
            'childRider' => '',
            'childUnits' => '',
            'spouseRider' => '',
            'spouseGender' => '',
            'spouseAge' => '',
            'spouseTobacco' => '',
            'gioRider' => '',
            'gioFace' => '',
            'flatExtra' => '',
            'flatExtraAmt' => '',
            'flatExtraPerm' => '',
            'flatExtraYears' => '',
            'allYears' => '',
            'grr3' => '',
        ];

        $this->partiallyMappedComparisonArray = [
            'product' => 'ISP3-WL-Exp',
            'name' => 'Pat Mapt',
            'state' => 'NJ',
            'gender' => 'M',
            'age' => '35',
            'premClass' => 'SP',
            'faceAmount' => '150000',
            'premium' => '',
            'calcFaceAmount' => '',
            'calcPremium' => '',
            'premMode' => '',
            'substdRating' => '',
            'fixedPct' => '',
            'adbRider' => '',
            'adbFace' => '',
            'adbEqualface' => '',
            'termRider' => 'Y',
            'termYears' => '15',
            'termFace' => '',
            'termMultiple' => '',
            'waiverRider' => 'N',
            'childRider' => '',
            'childUnits' => '',
            'spouseRider' => 'N',
            'spouseGender' => '',
            'spouseAge' => '',
            'spouseTobacco' => '',
            'gioRider' => '',
            'gioFace' => '',
            'flatExtra' => '',
            'flatExtraAmt' => '',
            'flatExtraPerm' => '',
            'flatExtraYears' => '',
            'allYears' => '',
            'grr3' => '',
        ];

        $this->partiallyMappedInputArray = [
            'product' => 'ISP3-WL-Exp',
            'name' => 'Pat Mapt',
            'state' => 'NJ',
            'gender' => 'M',
            'age' => '35',
            'prem_class' => 'SP',
            'face_amount' => '150000',
            'term_rider' => 'Y',
            'term_years' => '15',
            'waiver_rider' => 'N',
            'spouse_rider' => 'N',
        ];
    }

    public function tearDown()
    {
        // teardown the tested class and any other memory consumers.
    }
}
