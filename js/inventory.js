// adding elements
const inventoryItems = items; // these items are from invetory-items.js

inventoryItems.map((item) => {
  // creating card
  const card = `
    <div class="card ${item.category} ${item.rarity}" data-filter=${item.category}>
      <img class="img-fluid" src=${item.image} />
      <p>${item.name}</p>
    </div>
 `;

  if (item.rarity == "rare") {
    $("#rare-slider").append(card);
  } else if (item.rarity == "premium") {
    $("#100-slider").append(card);
  } else if (item.rarity === "basic") {
    $("#1000-slider").append(card);
  } else {
    $("#common-slider").append(card);
  }
  // $("#elementGrid").append();
});

const sliderWrapper = document.querySelectorAll(".slider-wrapper");
sliderWrapper.forEach((wrap) => {
  const slider = wrap.querySelector(".slider");

  $(slider).slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: wrap.querySelector(".btn-left"),
    nextArrow: wrap.querySelector(".btn-right"),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(".filters-button-group").each(function (i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on("click", "button", function () {
    $buttonGroup.find(".is-checked").removeClass("is-checked");
    $(this).addClass("is-checked");

    var filter = $(this).data("filter");
    console.log(filter);

    $(".slider").slick("slickUnfilter");
    switch (filter) {
      case "head":
        $(".slider").slick("slickFilter", ".head");
        break;
      case "eyes":
        $(".slider").slick("slickFilter", ".eyes");
        break;
      case "lower-face":
        $(".slider").slick("slickFilter", ".lower-face");
        break;
      case "neck":
        $(".slider").slick("slickFilter", ".neck");
        break;
      case "cape":
        $(".slider").slick("slickFilter", ".cape");
        break;
      case "background":
        $(".slider").slick("slickFilter", ".background");
        break;
      case "hand":
        $(".slider").slick("slickFilter", ".hand");
        break;
      case "extra-finger":
        $(".slider").slick("slickFilter", ".extra-finger");
        break;
      default:
        $(".slider").slick("slickUnfilter");
    }
  });
});
