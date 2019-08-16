<?php

namespace ForestersFinancial\FliacIllustrations\Service;

class WebToServiceMap
{
    const WEB_TO_SERVICE_MAP = [
        'accidental-death-benefit' => 'adb_rider',
        'accidental-death-benefit-class' => '',
        'accidental-death-benefit-face' => 'adb_face',
        'accidental-death-benefit-keep-equal' => 'adb_equalface',
        'allYears' => 'allyears', // no match
        'calcFaceAmount' => 'calc_face_amount', // no match
        'calcPremium' => 'calc_premium', // no match
        'childs-term' => 'child_rider',
        'childs-term-units' => 'child_units',
        'client-age' => 'age',
        'client-gender' => 'gender',
        'client-name' => 'name',
        'client-state' => 'state',
        'faceAmount' => 'face_amount', // no match
        'flatExtra' => 'flat_extra', // no match
        'flatExtraAmt' => 'flat_extra_amt', // no match
        'flatExtraPerm' => 'flat_extra_perm', // no match
        'flatExtraYears' => 'flat_extra_years', // no match
        'grr3' => 'grr3', // no match
        'guardian-insurability' => 'gio_rider',
        'guardian-insurability-face' => 'gio_face',
        'insureds-term' => 'term_rider',
        'insureds-term-face' => 'term_face',
        'insureds-term-face-multiple' => 'term_multiple',
        'insureds-term-years' => 'term_years',
        'loan' => '',
        'policy-class' => 'prem_class',
        'policy-face-amount' => '',
        'policy-face-amount-or-premium' => '',
        'policy-fixed-account-percent' => '',
        'policy-fixed-account-percent' => 'fixed_pct',
        'policy-premium-amount' => '',
        'policy-premium-mode' => 'prem_mode',
        'policy-sub-standard-rating' => 'substd_rating',
        'policy-suspend-premium' => '',
        'policy-tobacco-use' => '',
        'premium' => 'premium',
        'product' => 'product',
        'spouses-term' => 'spouse_rider',
        'spouses-term-age' => 'spouse_age',
        'spouses-term-face' => '',
        'spouses-term-gender' => 'spouse_gender',
        'spouses-term-tobacco' => 'spouse_tobacco',
        'waiver-of-premium' => 'waiver_rider',
        'waiver-of-premium-face' => '',
        'waiver-of-premium-face-multiple' => '',
        'waiver-of-premium-years' => '',
    ];
}
