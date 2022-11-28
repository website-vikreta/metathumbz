var $tickerWrapper = $(".tape-wrapper");
var $list = $tickerWrapper.find("ul.list");
var $clonedList = $list.clone();
var listWidth = 10;

$list.find("li").each(function (i) {
  listWidth += $(this, i).outerWidth(true);
});

var endPos = $tickerWrapper.width() - listWidth;

$list.add($clonedList).css({
  width: listWidth + "px",
});

$clonedList.addClass("cloned").appendTo($tickerWrapper);

//TimelineMax
var infinite = new TimelineMax({ repeat: -1, paused: true });
var time = 20;

infinite
  .fromTo(
    $list,
    time,
    { rotation: 0.01, x: 0 },
    { force3D: true, x: -listWidth, ease: Linear.easeNone },
    0
  )
  .fromTo(
    $clonedList,
    time,
    { rotation: 0.01, x: listWidth },
    { force3D: true, x: 0, ease: Linear.easeNone },
    0
  )
  .set($list, { force3D: true, rotation: 0.01, x: listWidth })
  .to(
    $clonedList,
    time,
    { force3D: true, rotation: 0.01, x: -listWidth, ease: Linear.easeNone },
    time
  )
  .to(
    $list,
    time,
    { force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone },
    time
  )
  .progress(1)
  .progress(0)
  .play();

// !======================
// ! Scroll to details
// !=======================

const rarityData = {
  image: "path/to/image",
  nftNumber: 202,
  attributes: {
    background: {
      type: "grey",
      value: 1.2020112,
    },
    hands: {
      type: "naked",
      value: 56.214,
    },
  },
};

$("#show-rank").click(function (e) {
  e.preventDefault();
  $("#rarity-body").css({
    overflow: "initial",
  });
  $("#nft-detail").css({
    opacity: 1,
    visibility: "visible",
  });
  $("#rarity-arrow").css({
    opacity: 1,
    visibility: "visible",
  });

  // feed nft info
  $("#typeBackground").text(rarityData.attributes.background.type);
  $("#valueBackground").text(rarityData.attributes.background.value);

  $("#typeHands").text(rarityData.attributes.hands.type);
  $("#valueHands").text(rarityData.attributes.hands.value);

  window.location.href = "#nft-detail";
});
