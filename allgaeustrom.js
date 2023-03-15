var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var siteUrl = WPURLS.siteurl;

jQuery(document).ready(function () {

    //pictures with family
    var pics = jQuery('#pics > div');
    var pics2 = jQuery('#picsSidebar > div');


    function getCitiesForZip(zip, callback) {

        jQuery.ajax({
            type: 'POST',
            url: siteUrl + "/wp-content/plugins/queryBox/ajax/getCities.php",
            data: {
                zip: zip
            },

            success: function (s) {

                jQuery('#cities, #citiesSidebar').html('');
                jQuery('#streets, #streetsSidebar').html('');

                if (!s) return false;

                //set hidden field
                jQuery('._zip').val(zip);

                var cities = s.split(',');

                for (var i = 0; i < cities.length; ++i) {
                    jQuery('#cities, #citiesSidebar').append('<li><a href class="toStreets">' + cities[i] + '</a></li>');
                }


                if (callback != undefined) callback();

            }
        });
    }

    //entering zip code, getting cities by zip
    jQuery(".data-plz").on("keyup", function () {
        var zip = jQuery(this).val();

        jQuery(this).addClass('error');

        if (zip.length == 5) {
            jQuery(this).removeClass('error');
            jQuery('#citySelect, #citySelectSidebar').next().slideUp();
            getCitiesForZip(zip, function () {
                jQuery('#citySelect, #citySelectSidebar').next().slideDown();
            });
        }
    });

    //entering zip code, getting cities by zip
    jQuery("[name=kwhValue]").on("keyup", function () {
        if (parseInt(jQuery(this).val()) > 999999999999999) jQuery(this).val(999999999999999);
        togglePics(jQuery(this).val());
    });


    jQuery("[name=kwhValue],.data-plz").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if (jQuery.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });


    function getStreets(zip, city, callback) {

        jQuery.ajax({
            type: 'POST',
            url: WPURLS.siteurl + "/wp-content/plugins/queryBox/ajax/getStreets.php",
            data: {
                zip: zip,
                city: city
            },

            success: function (s) {


                var streets = s.split(",");
                jQuery('#streets, #streetsSidebar').html('');


                for (var i = 0; i < streets.length; ++i) {
                    jQuery('#streets, #streetsSidebar').append('<li><a class="final" href>' + streets[i] + '</a></li>');
                }

                if (callback != undefined) callback(city);


            }
        });
    }

    //check zip to get city and streets
    if (jQuery(".data-plz").length > 0)
        if (jQuery(".data-plz").val().length == 5) {
            getCitiesForZip(jQuery(".data-plz").val());


            if (jQuery('._city').val().length > 0) {
                getStreets(jQuery(".data-plz").val(), jQuery('._city').val());
            }

        }

    //dont open box without cities or streets
    jQuery('.title_dropdown').click(function () {
        jQuery('#citySelect, #citySelectSidebar').next().slideUp();
        jQuery('#streetSelectSidebar, #streetSelect').next().slideUp();

        if (jQuery(this).next().find('.list-unstyled li').length > 1)
            jQuery(this).next().slideToggle();
        //jQuery(this).next().addClass('opened');
    });

    //dont submit form without city and street
    jQuery('#sumbitQueryBox').on('click', function (e) {
        e.preventDefault();

        var isValidCity = jQuery.trim(jQuery('#citySelect').text()) != 'Wohnort';
        var isValidStreet = jQuery.trim(jQuery('#streetSelect').text()) != 'Straße';
        var zip = jQuery('#queryTaxForm').find('.data-plz');

        if (isValidCity && isValidStreet) {

            jQuery('#queryTaxForm').submit();

        } else if (zip.text().length < 5) {
            zip.addClass('error');

        }

        if (!isValidCity) {
            jQuery('#citySelect').addClass('error');

        }

        if (!isValidStreet) {
            jQuery('#streetSelect').addClass('error');
        }
    });

    jQuery.extend(jQuery.expr[':'], {
        startsWith: function (elem, match, param3) {
            return (elem.textContent || elem.innerText || "").indexOf(param3[3]) == 0;
        }
    });

    //submiting sidebar form
    jQuery('#sumbitQueryBoxSidebar').on('click', function (e) {
        e.preventDefault();

        if (jQuery.trim(jQuery('#citySelectSidebar').text()) != 'Wohnort' &&
            jQuery.trim(jQuery('#streetSelectSidebar').text()) != 'Straße') {

            jQuery('#queryTaxFormSidebar').submit();
        }
    });

    jQuery(document).on('keyup', function (e) {
        if (jQuery('#streets').parent().is(":visible")) {
            //console.log('here');
            var regex = new RegExp("^[a-zA-Z0-9]+$");
            var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
            if (regex.test(str)) {
                var el = jQuery('#streets a:startsWith(' + str + ')');
                if (el.length > 0) {
                    //console.log('ahere');
                    jQuery('#streets').scrollTop(el[0].offsetTop);
                }
            }
        }
        if (jQuery('#streetsSidebar').parent().is(":visible")) {
            var regex = new RegExp("^[a-zA-Z0-9]+$");
            var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
            if (regex.test(str)) {
                var el = jQuery('#streetsSidebar a:startsWith(' + str + ')');

                if (el.length > 0) {
                    //console.log('here 3', el)
                    //console.log(jQuery(el[0]).parent()[0].offsetTop);
                    //console.log((jQuery(el[0].parent()).offsetTop));
                    //console.log(jQuery(el.get(0)));
                    jQuery('#streetsSidebar').scrollTop(jQuery(el[0]).parent()[0].offsetTop);
                }
            }
        }
        return true;
    });

    jQuery(".toStreets").live("click", function (e) {
        e.preventDefault();

        jQuery(this).parent().val(jQuery(this).text());

        var city = jQuery(this).text();
        var zip = jQuery('._zip').val();




        //hidden field
        jQuery('._city').val(city);

        getStreets(zip, city, function (city) {
            jQuery('#citySelect, #citySelectSidebar').removeClass('error');
            jQuery('#citySelect, #citySelectSidebar').text(city);
            jQuery('#citySelect, #citySelectSidebar').next().slideUp();
            jQuery('#streetSelect, #streetSelectSidebar').next().slideDown();
        })

    });

    jQuery(".final").live("click", function (e) {
        e.preventDefault();

        var street = jQuery(this).text();

        jQuery('#streetSelect, #streetSelectSidebar').removeClass('error');
        jQuery('#streetSelect, #streetSelectSidebar').text(street);
        //jQuery(this).next().slideToggle();

        jQuery('#streetSelect, #streetSelectSidebar').next().slideUp();

        //hidden field
        jQuery('._street').val(street);
    });

    jQuery.fn.swapWith = function (to) {
        return this.each(function () {
            var copy_to = jQuery(to).clone(true);
            var copy_from = jQuery(this).clone(true);
            jQuery(to).replaceWith(copy_from);
            jQuery(this).replaceWith(copy_to);
        });
    };

    function togglePics(pvalue) {

        pics.addClass('disp');
        pics2.addClass('disp');
        jQuery(pics[0]).removeClass('disp');
        jQuery(pics2[0]).removeClass('disp');

        if (pvalue >= 2000) {
            jQuery(pics[1]).removeClass('disp');
            jQuery(pics2[1]).removeClass('disp');
        }
        if (pvalue >= 3000) {
            jQuery(pics[2]).removeClass('disp');
            jQuery(pics2[2]).removeClass('disp');
        }
        if (pvalue >= 4000) {
            jQuery(pics[3]).removeClass('disp');
            jQuery(pics2[3]).removeClass('disp');
        }

        if (pvalue >= 4500) {
            jQuery(pics[4]).removeClass('disp');
            jQuery(pics2[4]).removeClass('disp');
        }

        //
        //
        //if (pvalue >= 1999) {
        //    jQuery(pics[1]).removeClass('disp'); //1 pic
        //} else {
        //    jQuery(pics[1]).addClass('disp'); //2pics
        //}
        //
        //if (pvalue >= 2000) {
        //    jQuery(pics[2]).removeClass('disp');
        //} else {
        //    jQuery(pics[2]).addClass('disp');
        //}
        //
        //if (pvalue >= 2999) {
        //    jQuery(pics[3]).removeClass('disp');
        //} else {
        //    jQuery(pics[3]).addClass('disp');
        //}
        //
        //if (pvalue >= 4001) {
        //    jQuery(pics[4]).removeClass('disp');
        //} else {
        //    jQuery(pics[4]).addClass('disp');
        //}

    }

    jQuery("#sliderBox, #sliderBoxSidebar").slider({
        min: 500,
        max: 6000,
        value: 2000,
        step: 500,
        range: "min",

        slide: function (event, ui) {

            jQuery('#sliderValue, #sliderValueSidebar').val(ui.value);
            togglePics(ui.value);
        },

        change: function (e, ui) {
            togglePics(ui.value);
        }
    });

    jQuery('.choseTariff').live('click', function () {
        //console.log(jQuery(this).data("id"));
        if (jQuery(this).data("id")) {

            var id = jQuery(this).data("id");
            jQuery.ajax({
                type: 'POST',
                url: siteUrl + "/wp-content/plugins/queryBox/ajax/setSessionVar.php",
                data: {
                    id: jQuery(this).data("id"),
                    counter: jQuery(this).data("counter"),
                    consumption: jQuery(this).data("consumption"),
                    consumption_ht: jQuery(this).data("consumption_ht"),
                    consumption_nt: jQuery(this).data("consumption_nt"),
                    kwh_price: jQuery(this).data("kwh_price"),
                    kwh_price_nt: jQuery(this).data("kwh_price_nt"),
                    kwh_price_ht: jQuery(this).data("kwh_price_ht")
                },
                success: function () {
                    location.href = siteUrl + '/page-register?tid=' + id;
                }
            });
        } else {
            //location.href = siteUrl + '/page-register';
        }
    });

    function sortTariffs() {
        // Bit-Flags werden unten verodert. 
        const ISOKOSTROMCHECKED = 1;
        const ISGUARANTEECHECKED = 2;
        const ISDUMMYCHECKED = 4;
        const ISDUMMY2CHECKED = 8;
        const ISUNDER28CHECKED = 16;
        var tariffIdent;

        // Check which Options are checked
        var okostromCbx = jQuery('.quetion_checkbox #checkbox1');
        tariffIdent |= okostromCbx.attr("checked") ? ISOKOSTROMCHECKED : 0;

        var guaranteeCbx = jQuery('.quetion_checkbox #checkbox2');
        tariffIdent |= guaranteeCbx.attr("checked") ? ISGUARANTEECHECKED : 0;
        
        // Dummyboxes, because #checkbox3 and #checkbox4 are not shown/used
        tariffIdent |= 0;
        tariffIdent |= 0;

        var under28Cbx = jQuery('.quetion_checkbox #checkbox5');
        tariffIdent |= under28Cbx.attr("checked") ? ISUNDER28CHECKED : 0;

        // remove spaces form data-tariffname-values
        jQuery("[data-tariffname]").each(function(e) {
            jQuery(this).attr("data-tariffname", jQuery(this).attr("data-tariffname").trim());
        });

        // All tarif-DOM-Elements as Variables
        var $elmntGarantOeko = jQuery("[data-tariffname='allgäustrom garant mit Ökooption']");
        var $elmntKlima = jQuery("[data-tariffname='allgäustrom klima']");
        var $elmntStarter = jQuery("[data-tariffname='allgäustrom starter']"); 
        var $elmntBasis = jQuery("[data-tariffname='allgäustrom basis']"); 
        var $elmntBasisOeko = jQuery("[data-tariffname='allgäustrom basis mit Ökooption']");
        var $elmnt100Percent = jQuery("[data-tariffname='allgäustrom 100%']");

        switch (tariffIdent) {
            case ISUNDER28CHECKED:
                arrangeElmnts($elmnt100Percent, $elmntStarter, $elmntBasis);
                break;
            case ISOKOSTROMCHECKED | ISUNDER28CHECKED:
                arrangeElmnts($elmntBasisOeko, $elmnt100Percent, $elmntStarter);
                break;
            case ISGUARANTEECHECKED | ISUNDER28CHECKED:
                arrangeElmnts($elmntGarantOeko, $elmntStarter, $elmntBasis);
                break;
            case ISOKOSTROMCHECKED | ISGUARANTEECHECKED | ISUNDER28CHECKED:
                arrangeElmnts($elmntStarter, $elmnt100Percent, $elmntGarantOeko);
                break;
            case ISOKOSTROMCHECKED:
                arrangeElmnts($elmntGarantOeko, $elmnt100Percent, $elmntBasisOeko);
                break;
            case ISGUARANTEECHECKED:
                arrangeElmnts($elmnt100Percent, $elmntGarantOeko, $elmntBasis);
                break;
            case ISOKOSTROMCHECKED | ISGUARANTEECHECKED:
                arrangeElmnts($elmntBasisOeko, $elmnt100Percent, $elmntGarantOeko);
                break;
            default:
                arrangeElmnts($elmntGarantOeko, $elmntBasis, $elmnt100Percent);
                break;
        }
    } // /sortTariffs()

    function arrangeElmnts(elmntLeft, elmntMiddle, elmntRight) {
        var tree_colum = '.tree_column';
        var $tariffs = jQuery(tree_colum).children();
        
        // reset last arrangement
        $tariffs.each(function() {
            jQuery(this).addClass("hiddenColumn");
        })

        // arrange the Elements and remove "display: none;"
        for (i = arguments.length; i >= 0; i--) {
            jQuery(arguments[i]).removeClass("hiddenColumn");
            jQuery(tree_colum).prepend(arguments[i]);
        }
    } // /arrangeElmnts()

/* 
    function disableFilter(selector) {
        jQuery(selector).attr('disabled', 'disabled');
        jQuery(selector).parent().parent().addClass('disabled');
    } 
*/
/* 
    function enableFilter(selector) {
        jQuery(selector).removeAttr('disabled');
        jQuery(selector).parent().parent().removeClass('disabled');
    } 
*/
/* 
    function isFilterChecked(selector) {
        return (jQuery(selector).attr("checked"));
    }
 */

    sortTariffs();

    jQuery('.quetion_checkbox input').click(function () {
        sortTariffs();
    });

    //get tariff info
    jQuery('.tariffInfo').live('click', function () {
        jQuery.ajax({
            type: 'POST',
            url: siteUrl + "/wp-content/plugins/queryBox/ajax/setSessionVar.php",
            data: {
                id: jQuery(this).data("id"),
                counter: jQuery(this).data("counter")
            },
            success: function () {

                location.href = siteUrl + '/page-details';
            }
        });
    });

    jQuery('#showSidebarBox').click(function () {

        if (!jQuery('#flyouts').hasClass('activeItem')) {
            jQuery('#flyouts').addClass('activeItem').css('right', '280px');
            jQuery('.kontakt:not(.active) .kontakt_div').css('display', 'block');

        } else {

            jQuery('#flyouts').removeClass('activeItem').css('right', '0px');
            jQuery('.kontakt:not(.active) .kontakt_div').css('display', 'none');
        }
    });

    //get bank name
    function getBankName(bankCode, accountNumber) {

        jQuery.ajax({
            type: 'POST',
            url: siteUrl + "/wp-content/plugins/queryBox/ajax/getBankName.php",
            data: {
                bankCode: bankCode,
                accountNumber: accountNumber
            },

            success: function (bankData) {
                var obj = JSON.parse(bankData);
                jQuery('#bankname').val(obj.bank_name);
                jQuery('#bic').val(obj.bic);
                jQuery('#iban').val(obj.iban);
            }
        });
    }

    //scroll top button
    jQuery('#scrollTop').click(function () {

        jQuery('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //getting bank data
    jQuery('#bankCode, #accountNumber').keyup(function () {

        if (jQuery('#bankCode').val() && jQuery('#accountNumber').val()) {

            getBankName(jQuery('#bankCode').val(), jQuery('#accountNumber').val());
        }
    });

    //prevent input data
    jQuery('#bin, #iban, #bankname').on('focus', function (e) {

        jQuery(this).attr('readonly', 'readonly');
    });

    jQuery('#showConsumptionPopup').on('click', function () {
        jQuery('.popup-consumtion, .popup-overlay').show();
    });

    jQuery('.popup-consumtion .close-popup, .popup-overlay').on('click', function () {
        jQuery('.popup-consumtion, .popup-overlay').hide();
    });

    jQuery.widget("ui.tooltip", jQuery.ui.tooltip, {
        options: {
            content: function () {
                return jQuery(this).prop('title');
            }
        }
    });

    jQuery(".question_3").tooltip({
        content: function () {
            return jQuery(this).prop('title');
        }
    });
    jQuery(".question_2").tooltip({
        content: function () {
            return jQuery(this).prop('title');
        }
    });
});

}
/*
     FILE ARCHIVED ON 01:42:19 Sep 22, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:21:47 Jan 13, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 2477.994
  exclusion.robots: 0.09
  exclusion.robots.policy: 0.083
  RedisCDXSource: 4.702
  esindex: 0.008
  LoadShardBlock: 2453.578 (3)
  PetaboxLoader3.datanode: 360.062 (5)
  CDXLines.iter: 17.22 (3)
  load_resource: 1489.177 (2)
  PetaboxLoader3.resolve: 1279.648 (2)
*/