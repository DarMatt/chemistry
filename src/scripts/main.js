const preview__btn = document.querySelector('.preview__btn');
const roadMap__btn = document.querySelector('.road-map__btn');
const shippingForm = document.querySelector('.shipping-form');
const modal = document.querySelector('.modal__bg-container');
const close_btn = document.querySelector('.modal__close-btn');
const boxs = document.querySelector('.reviews');
const sections_img = document.getElementById('sections-img');
const road_map_img = document.getElementById('road-map-img');
const main__preview = document.querySelector('.main__preview');
const main__numbers = document.querySelector('.main__numbers');
const sections = document.querySelector('.sections');
const lessons = document.querySelector('.lessons');
const road_map = document.querySelector('.road-map');
const about_me = document.querySelector('.about-me');
const reviews = document.querySelector('.reviews');
const price = document.querySelector('.price');
const burger_btn = document.querySelector('.header__burger');
const burger = document.querySelector('.burger');
const burger_close = document.querySelector('.burger__close-btn');
const contactBtnSingle = document.querySelector('.contact__btn-single');
const contactBtnTeam = document.querySelector('.contact__btn-team');
const priceBtnSingle = document.querySelector('.price__btn-single');
const priceBtnTeam = document.querySelector('.price__btn-team');
const singleUnselectedBtnClasses = document.getElementsByClassName('unselected-single')[0];
const teamUnselectedBtnClasses = document.getElementsByClassName('unselected-team')[0];

const medium = 1100;
// 768
const small = 600;
// 375

const openPopup = () => {
  modal.style.transform = 'scale(100%)';
  modal.style.background = 'rgba(22, 42, 70, 0.6)';
  document.body.style.overflow = 'hidden';
};
const hidePopup = () => {
  modal.style.transform = 'scale(0)';
  modal.style.background = 'none';
  window.onscroll = true;
  document.body.style.overflow = 'auto';
};

preview__btn.addEventListener('click', () => {
  openPopup();
});
shippingForm.addEventListener('click', () => {
  openPopup();
});

roadMap__btn.addEventListener('click', () => {
  openPopup();
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

close_btn.addEventListener('click', () => {
  hidePopup();
});

burger_btn.addEventListener('click', () => {
  burger.style.transform = 'translateY(0)';
});

burger_close.addEventListener('click', () => {
  burger.style.transform = 'translateY(-100%)';
});

window.addEventListener('resize', function () {
  console.log('screen.width', screen.width);
  console.log(screen.width < medium && screen.width > small)

  if (screen.width > medium) {
    sections_img.src = "./images/sections.jpeg";
    road_map_img.src = "./images/road-map.svg";
  }

  if (screen.width < medium && screen.width > small) {
    sections_img.src = "./images/sections-medium.svg";
    road_map_img.src = "./images/road-map-medium.svg";
  }
  if (screen.width < small) {
    sections_img.src = "./images/sections-small.svg";
    road_map_img.src = "./images/road-map-small.svg";
  }
});

contactBtnSingle.addEventListener('click', () => {
  const teamClasses = document.getElementsByClassName('contact__btn-team')[0].className;
  if (teamClasses.split(' ')[1] === 'selected-team') {
    const teamSelectedClasses = document.getElementsByClassName('selected-team')[0];
    teamSelectedClasses.className = 'contact__btn-team unselected-team';
  }

  const singleSelectedBtnClasses = document.getElementsByClassName('selected-single')[0];
  const singleClasses = singleSelectedBtnClasses || singleUnselectedBtnClasses;
  const singleClass = singleSelectedBtnClasses ? 'unselected-single' : 'selected-single';
  singleClasses.className = `contact__btn-single ${singleClass}`;
});

contactBtnTeam.addEventListener('click', () => {
  const contactBtnSingle = document.getElementsByClassName('contact__btn-single')[0].className;
  if (contactBtnSingle.split(' ')[1] === 'selected-single') {
    const singleSelectedBtnClasses = document.getElementsByClassName('selected-single')[0];
    singleSelectedBtnClasses.className = 'contact__btn-single unselected-single';
  }

  const teamSelectedBtnClasses = document.getElementsByClassName('selected-team')[0];
  const teamClasses = teamSelectedBtnClasses || teamUnselectedBtnClasses;
  const teamClass = teamSelectedBtnClasses ? 'unselected-team' : 'selected-team';
  teamClasses.className = `contact__btn-team ${teamClass}`;
});

priceBtnSingle.addEventListener('click', () => {
  window.scrollTo(0, document.body.scrollHeight);
  singleUnselectedBtnClasses.className = 'contact__btn-single selected-single';
});

priceBtnTeam.addEventListener('click', () => {
  window.scrollTo(0, document.body.scrollHeight);
  teamUnselectedBtnClasses.className = 'contact__btn-team selected-team';
});

window.addEventListener('scroll', function () {
  const scrollTopPosition = document.documentElement.scrollTop;
  const elementsHeight1 = main__preview.clientHeight + main__numbers.clientHeight
    + sections.clientHeight + lessons.clientHeight;
  const elementsHeight2 = main__preview.clientHeight + main__numbers.clientHeight
    + sections.clientHeight + lessons.clientHeight + road_map.clientHeight + about_me.clientHeight;
  const elementsHeight3 = main__preview.clientHeight + main__numbers.clientHeight
    + sections.clientHeight + lessons.clientHeight + road_map.clientHeight + about_me.clientHeight + reviews.clientHeight;

  if (scrollTopPosition > elementsHeight1 - (road_map.clientHeight / 2)) {
    road_map.style.transform = 'translateY(0%)';
  }
  if (scrollTopPosition > elementsHeight2 - (reviews.clientHeight / 2)) {
    boxs.style.transform = 'translateX(0%)';
  }
  if (scrollTopPosition > elementsHeight3 - (price.clientHeight / 2)) {
    price.style.transform = 'translateX(0%)';
  }
});

const serviceID = "chemistry_lessons";
const templateID = "template_k8j2q9c";

function sendEmail(e) {
  e.preventDefault();
  const params = {
    name: document.querySelector('.modal__name-input').value,
    tel: document.querySelector('.modal__tel-input').value,
    message: document.querySelector('.modal__info-input').value
  };

  emailjs.send(serviceID, templateID, params)
    .then(
      res => {
        hidePopup();

        document.querySelector('.modal__name-input').value = '';
        document.querySelector('.modal__tel-input').value = '';
        document.querySelector('.modal__info-input').value = '';
        console.log(res);
        alert("Ваша заявка відправлена успішно!");
      })

    .catch(err => {
      console.log('err', err);
      alert("Не вийшло відправии імейл, будь-ласка поздзвоніть, або напишіть смс на мій номер: +380504011043");
      hidePopup();
    });
};

function sendEmail2(e) {
  e.preventDefault();
  const contactBtnSingle = document.getElementsByClassName('contact__btn-single')[0].className.split(' ')[1];
  const contactBtnTeam = document.getElementsByClassName('contact__btn-team')[0].className.split(' ')[1];
  const getInfo = () => {
    const text1 = contactBtnSingle.includes('unselected') ? '' : 'індивідуальні';
    const text2 = contactBtnTeam.includes('unselected') ? '' : 'групові';
    return text1 + ' ' + text2;
  }

  const params = {
    name: document.querySelector('.name-input').value,
    tel: document.querySelector('.tel-input').value,
    message: getInfo()
  };

  emailjs.send(serviceID, templateID, params)
    .then(
      res => {
        document.querySelector('.name-input').value = '';
        document.querySelector('.tel-input').value = '';
        console.log(res);
        document.getElementsByClassName('contact__btn-single')[0].className = 'contact__btn-single unselected-single';
        document.getElementsByClassName('contact__btn-team')[0].className = 'contact__btn-single unselected-team';
        alert("Ваша заявка відправлена успішно!");
      })

    .catch(err => {
      console.log('err', err);
      alert("Не вийшло відправии імейл, будь-ласка поздзвоніть, або напишіть смс на мій номер: +380504011043");
    });
}

