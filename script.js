// ---------------- Tab Switching ----------------
$(".tablink").click(function(e){
  e.preventDefault();
  $(".tablink").removeClass("active");
  $(this).addClass("active");

  let target = $(this).data("target");
  $(".tabcontent").removeClass("active");
  $("#" + target).addClass("active");
});

// ---------------- Dashboard Buttons ----------------
$(".go-to").click(function(){
  let target = $(this).data("target");
  $(".tablink").removeClass("active");
  $(".tablink[data-target='" + target + "']").addClass("active");

  $(".tabcontent").removeClass("active");
  $("#" + target).addClass("active");
});

// ---------------- Subscription Calculator ----------------
$("#calc").click(function(){
  let amt = parseFloat($("#amount").val());
  let gst = parseFloat($("#gstRate").val());
  if(isNaN(amt)) { alert("Enter a valid amount"); return; }
  let gstAmount = (amt * gst) / 100;
  let total = amt + gstAmount;
  $("#base").text("₹" + amt.toFixed(2));
  $("#gstamt").text("₹" + gstAmount.toFixed(2));
  $("#total").text("₹" + total.toFixed(2));
});

// ---------------- Time Budget Calculator ----------------
$("#eval").click(function(){
  let h = parseFloat($("#hours").val());
  let n = parseFloat($("#news").val());
  let m = parseFloat($("#music").val());
  let e = parseFloat($("#edu").val());
  let en = parseFloat($("#ent").val());
  if((n+m+e+en) !== 100) {
    alert("Percentages must add up to 100!");
    return;
  }
  $("#rnews").text((h*n/100).toFixed(1));
  $("#rmusic").text((h*m/100).toFixed(1));
  $("#redu").text((h*e/100).toFixed(1));
  $("#rent").text((h*en/100).toFixed(1));
});

// ---------------- Episode Order Calculator ----------------
function calculateOrder() {
  let price = parseFloat($("#category").val());
  let qty = parseInt($("#qty").val());
  let total = price * qty;
  $("#price").text(price);
  $("#totalCost").text(total);
}
$("#category, #qty").change(calculateOrder);
$(document).ready(calculateOrder);
