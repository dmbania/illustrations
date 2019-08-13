<?php

namespace ForestersFinancial\FliacIllustrations\Service;

use PHPUnit\Framework\TestCase;

class WebToServiceDecoratorTest extends TestCase
{
    public $emptyComparisonArray;

    public function testAnEmptyArrayAsInput()
    {
        $mapping = new WebToServiceDecorator();

        $this->assertEqualsCanonicalizing(
            $this->emptyComparisonArray,
            $mapping->get(),
            'Making sure we are getting what we thing we are getting with empty input'
        );
    }

    public function testAPartiallyPopulatedArrayAsInput()
    {
        $mapping = new WebToServiceDecorator($this->partiallyMappedInputArray);

        $this->assertEqualsCanonicalizing(
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
            'prem_class' => '',
            'face_amount' => '',
            'premium' => '',
            'calc_face_amount' => '',
            'calc_premium' => '',
            'prem_mode' => '',
            'substd_rating' => '',
            'fixed_pct' => '',
            'adb_rider' => '',
            'adb_face' => '',
            'adb_equalface' => '',
            'term_rider' => '',
            'term_years' => '',
            'term_face' => '',
            'term_multiple' => '',
            'waiver_rider' => '',
            'child_rider' => '',
            'child_units' => '',
            'spouse_rider' => '',
            'spouse_gender' => '',
            'spouse_age' => '',
            'spouse_tobacco' => '',
            'gio_rider' => '',
            'gio_face' => '',
            'flat_extra' => '',
            'flat_extra_amt' => '',
            'flat_extra_perm' => '',
            'flat_extra_years' => '',
            'allyears' => '',
            'grr3' => '',
        ];

        $this->partiallyMappedComparisonArray = [
            'product' => 'ISP3-WL-Exp',
            'name' => 'Pat Mapt',
            'state' => 'NJ',
            'gender' => 'M',
            'age' => '35',
            'prem_class' => 'SP',
            'face_amount' => '150000',
            'premium' => '',
            'calc_face_amount' => '',
            'calc_premium' => '',
            'prem_mode' => '',
            'substd_rating' => '',
            'fixed_pct' => '',
            'adb_rider' => '',
            'adb_face' => '',
            'adb_equalface' => '',
            'term_rider' => 'Y',
            'term_years' => '15',
            'term_face' => '',
            'term_multiple' => '',
            'waiver_rider' => 'N',
            'child_rider' => '',
            'child_units' => '',
            'spouse_rider' => 'N',
            'spouse_gender' => '',
            'spouse_age' => '',
            'spouse_tobacco' => '',
            'gio_rider' => '',
            'gio_face' => '',
            'flat_extra' => '',
            'flat_extra_amt' => '',
            'flat_extra_perm' => '',
            'flat_extra_years' => '',
            'allyears' => '',
            'grr3' => '',
        ];

        $this->partiallyMappedInputArray = [
            'product' => 'ISP3-WL-Exp',
            'name' => 'Pat Mapt',
            'state' => 'NJ',
            'gender' => 'M',
            'age' => '35',
            'premClass' => 'SP',
            'faceAmount' => '150000',
            'termRider' => 'Y',
            'termYears' => '15',
            'waiverRider' => 'N',
            'spouseRider' => 'N',
        ];
    }

    public function tearDown()
    {
        // teardown the tested class and any other memory consumers.
    }
}
