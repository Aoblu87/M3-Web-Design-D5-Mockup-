import courses from './courses.js';
import icons from './icons.js';

document.addEventListener('DOMContentLoaded', function () {
  generateCards();
  changeBookmarkIcon();
});

function changeBookmarkIcon() {
  const bookmarks = document.querySelectorAll('[data-target=favorites]');
  const bookmarkFill = document.querySelectorAll('.bi-bookmark-fill');

  for (const bookmark of bookmarks) {
    bookmark.addEventListener('click', function (event) {
      for (const fill of bookmarkFill) {
        fill.classList.toggle('favorites');
      }
    });
  }
}

function generateCards() {
  const recommendedCardsContainer =
    document.querySelector('#recommended-cards');
  const coursesHTML = courses
    .map(
      (course, index) => ` <div class="col-6 mb-4">
        <div class="card" id=${index}>
          <img
            src="${course.image}"
            class="card-img-top"
            alt="${course.title}"
          />
          <div class="card-body pb-0">
            <h5
              class="mt-2 text-truncate"
              style="
                font-size: 12pt;
                font-weight: 400;
                max-width: 100%;
              "
            >
            ${course.title}
            </h5>
            <div class="row">
              <div class="col-6 d-flex align-items-center text-muted">
              ${icons.clockSVG}
                <p class="card-text pl-1">2h 40m</p>
              </div>
              <div class="col-6 d-flex text-muted pl-2">
                <p class="${course.level}"></p>
                <p class="card-text ml-2">${course.level}</p>
              </div>
            </div>
            <div class="row mt-3">
              <div
                class="col d-flex align-items-baseline text-warning"
              >
              ${icons.starFullSVG}

              ${icons.starFullSVG}


              ${icons.starHalfSVG}

              ${icons.starSVG}
              ${icons.starSVG}
          
                <p class="mx-0 px-2">
                ${course.rating}
                <span class="px-2" style="color: #afaabe"
                    >(${course.reviews})

                    </span
                  >
                </p>
              </div>
              <div class="col d-flex align-items-baseline">
                <p class="font-weight-bold">                ${course.price}
                </p>
                <span class="px-2" style="color: #afaabe">
                  <s>                ${course.originalPrice}
                  </s></span
                >
              </div>
            </div>
          </div>

          <div class="card-footer bg-white">
            <div class="container">
              <div
                class="row flex-column flex-xl-row align-items-xl-center"
              >
                <div
                  class="col-12 col-xl-12 d-flex justify-content-between p-0 mb-1 m-xl-0"
                >
                  <img
                    class="img fluid rounded-circle"
                    src="                ${course.instructor.avatar}
                    "
                    alt="${course.instructor.avatar}"
                    style="width: 1.8em; order: 1"
                  />
                  <div
                    class="save col-1 p-0"
                    data-target="favorites"
                    style="
                      color: #afaabe;
                      position: relative;
                      order: 3;
                    "
                  >
                  ${icons.bookmarkSVG}
                  ${icons.bookmarkSVGFill}
                    
                  </div>
                </div>
                <div class="col pl-2 text-muted p-0" style="order: 3">
                  <p class="p-0 m-0">                  ${course.instructor.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> `
    )
    .join('');
  console.log(recommendedCardsContainer);
  recommendedCardsContainer.innerHTML = coursesHTML;
}
