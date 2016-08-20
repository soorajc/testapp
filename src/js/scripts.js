// Empty JS for your own code to be here
function OpenInNewTab(choice) {
  var out;
  var searchItem = document.getElementById("searchitem").value;
  if(searchItem.length === 0) {
    $(document).ready(function(){
      $("#myModal").modal();
});
  }else{
    switch (choice) {
      case 0:
          url = "http://www.amazon.in/s/ref=as_li_ss_tl?_encoding=UTF8&camp=3626&creative=24822&field-keywords="+searchItem+"&linkCode=ur2&sprefix=n%2Caps%2C337&tag=mybigshopper-21&url=search-alias%3Daps";
          break;
      case 1:
          url = "http://www.ebay.in/sch/i.html?_from=R40&_trksid=p2050601.m570.l1311.R3.TR10.TRC0.A0.H0.Xlenv.TRS0&_nkw="+searchItem+"&_sacat=0";
          break;
      case 2:
          url = "http://dl.flipkart.com/dl/search?q="+searchItem+"&affid=soorajcmp";
          break;
      case 3:
          url = "http://www.snapdeal.com/search?keyword="+searchItem+"&utm_source=aff_prog&utm_campaign=afts&offer_id=17&aff_id=99134";
          break;
      case 4:
          url = "https://paytm.com/shop/search/?q="+searchItem+"&from=organic";
          break;
      case 5:
          url = "http://search.shopclues.com/?subcats=Y&status=A&pname=Y&product_code=Y&match=all&pkeywords=Y&search_performed=Y&z=1&q="+searchItem+"&auto_suggest=0&cid=0&dispatch=products.search";
          break;
      case 6:
          url ="http://www.infibeam.com/search?q="+searchItem+"&us=true&trackId=sooraj";
          break;
      case 7:
          url ="http://www.myntra.com/"+searchItem+"?userQuery=true";
          break;
      case 8:
          url ="http://www.jabong.com/find/"+searchItem+"/?q="+searchItem;
          break;
      case 9:
          url = "http://shopping.indiatimes.com/mtkeywordsearch?SEARCH_STRING="+searchItem;
          break;
      case 10:
          url = "https://www.tatacliq.com/search/?searchCategory=all&text="+searchItem;
          break;
      case 11:
          url ="http://www.homeshop18.com/search:"+searchItem;
          break;

  }

    var win = window.open(url, '_blank');
    win.focus();
  }
}


function dailyDeals(choice) {
    switch (choice) {
      case 0:
          url1 = "http://amzn.to/2b4FYmB";
          break;
      case 1:
          url1 = "http://www.ebay.in/rpp/deals/";
          break;
      case 2:
          url1 = " http://dl.flipkart.com/dl/offers?affid=soorajcmp";
          break;
      case 3:
          url1 = "http://www.snapdeal.com/offers/deal-of-the-day?utm_source=aff_prog&utm_campaign=afts&offer_id=17&aff_id=99134";
          break;
      case 4:
          url1 = "https://paytm.com/shop/g/paytm-home/steal-of-the-day";
          break;
      case 5:
          url1 = "http://www.shopclues.com/offers.html";
          break;
      case 6:
          url1 ="http://www.infibeam.com/deal-of-the-day?trackId=sooraj";
          break;
      case 7:
          url1 ="http://www.myntra.com/deal-of-the-day";
          break;
      case 8:
          url1 ="http://www.jabong.com/all-products/?promotion=dailydeals&cmpgp=dailydeal1";
          break;
      case 9:
          url1 = "http://shopping.indiatimes.com/deals/";
          break;
      case 10:
          url1 = "https://www.tatacliq.com/offersPage";
          break;
      case 11:
          url1 ="http://www.homeshop18.com/tso/";
          break;

  }
    var win2 = window.open(url1, '_blank');
    win2.focus();
}


function newProducts(choice) {
    switch (choice) {
      case 0:
          url1 = "http://amzn.to/2bonJ9I";
          break;
      case 1:
          url1 = "http://www.ebay.in/";
          break;
      case 2:
          url1 = "http://dl.flipkart.com/dl/?affid=soorajcmp";
          break;
      case 3:
          url1 = "http://www.snapdeal.com/offers/exclusive-launches?utm_source=aff_prog&utm_campaign=afts&offer_id=17&aff_id=99134";
          break;
      case 4:
          url1 = "https://paytm.com/";
          break;
      case 5:
          url1 = "http://www.shopclues.com/";
          break;
      case 6:
          url1 ="http://www.infibeam.com/?trackId=sooraj";
          break;
      case 7:
          url1 ="http://www.myntra.com/latest-collection";
          break;
      case 8:
          url1 ="http://www.jabong.com/women/clothing/new-products/";
          break;
      case 9:
          url1 = "http://shopping.indiatimes.com";
          break;
      case 10:
          url1 = "https://www.tatacliq.com";
          break;
      case 11:
          url1 ="http://www.homeshop18.com/tso/";
          break;

  }
    var win2 = window.open(url1, '_blank');
    win2.focus();
}

function liveUpdates(name) {
  $.getJSON("notify.js", function(result){
        $.each(result, function(i, field){
            var site = i;
            for(i = 0; i<field.length; i++) {
              console.log(field[i].text);
              if(site===name){
                $("#"+name).append('<span class="alert alert-warning">'+'<a target="_blank" href="' + field[i].link + '">'+field[i].text + "</span>");
              }else{
                console.log("Filtering succes");
              }
            }
        });
    });
}
