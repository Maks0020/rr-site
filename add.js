// gallary
let photos = ['images/gallery/rr-one.png', 'images/gallery/rr-two.png', 'images/gallery/rr-three.png', 'images/gallery/rr-four.png', 'images/gallery/rr-five.png', 'images/gallery/rr-six.png', 'images/gallery/rr-seven.png', 'images/gallery/rr-eight.png', 'images/gallery/rr-nine.png', 'images/gallery/rr-ten.png'];
let currentPhotoIndex = 2;

let photosContainer = document.querySelector('.images-block'); // добавляем переменную для контейнера фотографий

let photoA = photosContainer.querySelector('.photo-a'); // меняем на photosContainer.querySelector
let photoB = photosContainer.querySelector('.photo-b');
let photoC = photosContainer.querySelector('.photo-c');

photoA.src = photos[0];
photoB.src = photos[1];
photoC.src = photos[2];

photoC.addEventListener('click', function() {
  currentPhotoIndex++;
  if (currentPhotoIndex >= photos.length) {
    currentPhotoIndex = 0;
  }
  let temp = photoA.src;
  photoA.src = photoB.src;
  photoB.src = photoC.src;
  photoC.src = photos[currentPhotoIndex];
  photos[0] = temp; // заменяем первый элемент массива photos, а не последний
});


document.querySelector('.video-stars_bg').playbackRate = 0.65;
// gallery
//---------

// search

const button = document.getElementById('hrSearch');
const modalContainer = document.getElementById('modalContainer');

button.addEventListener('click', () => {
  modalContainer.style.display = 'block';
});

modalContainer.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});

const modalContent = document.getElementById('modalContent');
modalContent.addEventListener('click', (e) => {
  e.stopPropagation();
});

const searchInput = document.getElementById('inpSearch');
searchInput.addEventListener('click', (e) => {
  e.stopPropagation();
});

searchInput.addEventListener('keydown', (e) => {
  e.stopPropagation();
});

searchInput.addEventListener('keyup', (e) => {
  e.stopPropagation();
});

searchInput.addEventListener('keypress', (e) => {
  e.stopPropagation();
});

searchInput.addEventListener('mousedown', (e) => {
  e.stopPropagation();
});

searchInput.addEventListener('mouseup', (e) => {
  e.stopPropagation();
});

// search
//--------



// burg

function openBurgerMenu() {
  var opMenu = document.querySelector('.menu');
  if (opMenu.style.display === "flex") {
    opMenu.style.display = "none";
  } else {
    opMenu.style.display = "flex";
  }
}
var burgBnt = document.querySelector('.btn-burger');
burgBnt.addEventListener("click", openBurgerMenu);

var burgBntcl = document.querySelector('.btn-burger-close');
burgBntcl.addEventListener("click", openBurgerMenu);






// burg
//------ 

// --------lang


  function changeLanguage(lang){
    if (lang == 'rus'){
      document.getElementById('inpSearch').placeholder = 'Найти дилера';

      // ```.menu-links
      document.getElementById('langAboutUs').innerText = 'О нас';
      document.getElementById('langServices').innerText ='Услуги';
      document.getElementById('langModels').innerText ='Модели';
      document.getElementById('langCreateACar').innerText ='Создать авто';
      document.getElementById('langAccessory').innerText ='Аксессуары';

      // ```.txt-more(1)
      document.getElementById('langTxtMoreOne').innerText = 'Подробнее';

      // ```.text-about-company
      document.getElementById('langTextAboutCompany').innerText = 'Rolls-Royce - это марка автомобилей, созданных для требовательных покупателей, которые ценят утонченность, комфорт и бескомпромиссное качество. Уникальность каждой модели заключается в неповторимости деталей и выраженной индивидуальности, которые создаются мастерами вручную из лучших материалов. Rolls-Royce всегда следит за новейшими технологиями, чтобы обеспечить безопасность и комфорт для водителя и пассажиров. Каждый автомобиль Ролс-Ройс является произведением искусства, созданным для тех, кто ценит роскошь и бескомпромиссное качество.';

      // ```.text-more(2)
      document.getElementById('langTxtMoreTwo').innerText = 'Подробнее';

      // ```.text-company-history
      document.getElementById('langTextCompanyHistory').innerText = 'Один из самых известных производителей автомобилей в мире - Rolls-Royce, был основан французом Генри Ройсом и британцем Чарльзом Роллсом в 1906 году. Они встретились в Лондоне на выставке автомобильных инженеров в 1904 году и через два года они вместе создали свою марку.\n \nСегодня Rolls-Royce - это одна из самых известных автомобильных марок в мире и продолжает завоевывать сердца покупателей своей роскошью, комфортом и инновациями. Каждый автомобиль Rolls-Royce - это неповторимый шедевр ручной работы, позволяющий своему обладателю наслаждаться комфортом до и после каждой езды.';

      // ```.characeteristics > li
      
      document.getElementById('langLengthOne').innerText = 'Длина: 6,5 метра';
      document.getElementById('langWidthOne').innerText = 'Ширина: 1,9 метра';
      document.getElementById('langHeightOne').innerText = 'Высота: 1,6 метра';
      document.getElementById('langEnginePowerOne').innerText = 'Мощность двигателя: 563 л.с.';
      document.getElementById('langAccelerationOne').innerText = 'Ускорение 0-100 км/ч: 5,3 секунды';

      document.getElementById('langLengthTwo').innerText = 'Длина: 5,5 метра';
      document.getElementById('langWidthTwo').innerText = 'Ширина: 2,1 метра';
      document.getElementById('langHeightTwo').innerText = 'Высота: 1,6 метра';
      document.getElementById('langEnginePowerTwo').innerText = 'Мощность двигателя: 563 л.с.';
      document.getElementById('langAccelerationTwo').innerText = 'Ускорение 0-100 км/ч: 4,5 секунды';

      document.getElementById('langLengthThree').innerText = 'Длина: 5,3 метра';
      document.getElementById('langWidthThree').innerText = 'Ширина: 1,9 метра';
      document.getElementById('langHeightThree').innerText = 'Высота: 1,5 метра';
      document.getElementById('langEnginePowerThree').innerText = 'Мощность двигателя: 601 л.с.';
      document.getElementById('langAccelerationThree').innerText = 'Ускорение 0-100 км/ч: 4,9 секунды';

      // ```.txt-card
      document.getElementById('langTxtCardOne').innerText = 'Роскошный салон с элементами ручной работы, опциональная звуковая система с 18 динамиками, технологии повышенного комфорта и безопасности';
      document.getElementById('langTxtCardTwo').innerText = 'Spectre имеет четыре электромотора совокупной отдачей 585 л.с. Емкость тяговой батареи — 120 кВт∙ч, примерная дальность хода — 520 км по циклу WLTP.';
      document.getElementById('langTxtCardThree').innerText = 'Изысканный, неповторимый, атлетичный, роскошный, утонченный - можно долго описывать его внешность с характерными фамильными чертами британской марки.';

      // ```txt-more(3)
      document.getElementById('langTxtMoreThree').innerText = 'Подробнее';
      document.getElementById('langTxtMoreFour').innerText = 'Подробнее';
      document.getElementById('langTxtMoreFive').innerText = 'Подробнее';

      // ```text-soe
      document.getElementById('langTextSoe').innerText = 'Каждая фигурка «Дух экстаза» делается вручную. Литьё выполняется в с тысячелетним «принципом утраченной формы». По этой технологии, официально называемой «литьём по выплавляемым моделям», нужно разрушить форму, чтобы достать заготовку. Это объясняет тот факт, почему ни одна фигура не является точной копией другой.';

      // ```.txt-create-car
      document.getElementById('langTxtCreateCar').innerText = 'Создай автомобиль мечты';

      // ```.txt-more(6)
      document.getElementById('langTxtmoreSix').innerText = 'Подробнее';

      // ```.txt-share
      document.getElementById('langTxtShare').innerText = 'Поделиться';

    } else if (lang =='eng'){
      document.getElementById('inpSearch').placeholder = 'Find a dealer';

      // ```.menu-links
      document.getElementById('langAboutUs').innerText = 'About us';
      document.getElementById('langServices').innerText ='Services';
      document.getElementById('langModels').innerText ='Models';
      document.getElementById('langCreateACar').innerText ='Create a car';
      document.getElementById('langAccessory').innerText ='Accessory';

      // ```.txt-more(1)
      document.getElementById('langTxtMoreOne').innerText = 'More details';

      // ```.text-about-company
      document.getElementById('langTextAboutCompany').innerText = 'Rolls-Royce is a brand of cars created for demanding customers who value refinement, comfort, and uncompromising quality. The uniqueness of each model lies in the individuality of the details and the handcrafted craftsmanship using the finest materials. Rolls-Royce always keeps up with the latest technologies to ensure safety and comfort for the driver and passengers. Each Rolls-Royce car is a work of art created for those who value luxury and uncompromising quality.';

      // ```.text-more(2)
      document.getElementById('langTxtMoreTwo').innerText = 'More details';

      // ```.text-company-history
      document.getElementById('langTextCompanyHistory').innerText = 'One of the most famous car manufacturers in the world - Rolls-Royce, was founded by Frenchman Henry Royce and Briton Charles Rolls in 1906. They met in London at an exhibition of automobile engineers in 1904 and two years later they created their own brand together.\n \nToday, Rolls-Royce is one of the most renowned automotive brands in the world and continues to capture the hearts of buyers with its luxury, comfort and innovation. Each Rolls-Royce car is a unique masterpiece of handmade craftsmanship, providing its owner with unparalleled comfort before and after every ride.';

      // ```.characeteristics > li
      
      document.getElementById('langLengthOne').innerText = 'Length: 6.5 meters';
      document.getElementById('langWidthOne').innerText = 'Width: 1.9 meters';
      document.getElementById('langHeightOne').innerText = 'Height: 1.6 meters';
      document.getElementById('langEnginePowerOne').innerText = 'Engine power: 563 horsepower';
      document.getElementById('langAccelerationOne').innerText = 'Acceleration 0-100 km/h: 5.3 seconds';

      document.getElementById('langLengthTwo').innerText = 'Length: 5.5 meters';
      document.getElementById('langWidthTwo').innerText = 'Width: 2.1 meters';
      document.getElementById('langHeightTwo').innerText = 'Height: 1.6 meters';
      document.getElementById('langEnginePowerTwo').innerText = 'Engine power: 563 horsepower';
      document.getElementById('langAccelerationTwo').innerText = 'Acceleration 0-100 km/h: 4.5 seconds';

      document.getElementById('langLengthThree').innerText = 'Length: 5.3 meters';
      document.getElementById('langWidthThree').innerText = 'Width: 1.9 meters';
      document.getElementById('langHeightThree').innerText = 'Height: 1.5 meters';
      document.getElementById('langEnginePowerThree').innerText = 'Engine power: 601 horsepower';
      document.getElementById('langAccelerationThree').innerText = 'Acceleration 0-100 km/h: 4.9 seconds';

      // ```.txt-card
      document.getElementById('langTxtCardOne').innerText = 'Luxurious salon with handcrafted elements, optional sound system with 18 speakers, advanced comfort and safety technologies';
      document.getElementById('langTxtCardTwo').innerText = 'Spectre has four electric motors with a total output of 585 horsepower. The capacity of the traction battery is 120 kWh and the approximate range is 520 km according to the WLTP cycle.';
      document.getElementById('langTxtCardThree').innerText = 'Exquisite, unique, athletic, luxurious, refined - one can describe its appearance with the characteristic hereditary traits of the British brand for a long time.';

      // ```txt-more(3)
      document.getElementById('langTxtMoreThree').innerText = 'More details';
      document.getElementById('langTxtMoreFour').innerText = 'More details';
      document.getElementById('langTxtMoreFive').innerText = 'More details';

      // ```text-soe
      document.getElementById('langTextSoe').innerText = 'Each figurine of "Spirit of Ecstasy" is made by hand. Casting is done according to the millennia-old "lost wax method". According to this technology, officially called "investment casting", the form must be destroyed to extract the workpiece. This explains the fact that no two figures are exact replicas of each other.';

      // ```.txt-create-car
      document.getElementById('langTxtCreateCar').innerText = 'Create your dream car';

      // ```.txt-more(6)
      document.getElementById('langTxtmoreSix').innerText = 'More details';

      // ```.txt-share
      document.getElementById('langTxtShare').innerText = 'Share';

    } else if (lang == 'arm') {
      document.getElementById('inpSearch').placeholder = 'Որոնել դիլեր';
      // ```.menu-links
      document.getElementById('langAboutUs').innerText = 'Մեր մասին';
      document.getElementById('langServices').innerText ='Ծառայություններ';
      document.getElementById('langModels').innerText ='Մոդելներ';
      document.getElementById('langCreateACar').innerText ='Գերահատեք մեքենա';
      document.getElementById('langAccessory').innerText ='Ակսեսուարներ';

      // ```.txt-more(1)
      document.getElementById('langTxtMoreOne').innerText = 'Ավելին մանրամասն';

      // ```.text-about-company
      document.getElementById('langTextAboutCompany').innerText = 'Rolls-Royce-ը մեքենաների ապրանքանիշ է, որը ստեղծվել է պահանջկոտ գնորդների համար, ովքեր գնահատում են նրբագեղությունը, հարմարավետությունն ու անզիջում որակը: Յուրաքանչյուր մոդելի յուրահատկությունը կայանում է մանրամասների յուրահատկության և արտահայտված անհատականության մեջ, որոնք արհեստավորները ձեռքով ստեղծում են լավագույն նյութերից. Rolls-Royce - ը մշտապես հետևում է նորագույն տեխնոլոգիաներին, վարորդի և ուղևորների անվտանգությունն ու հարմարավետությունն ապահովելու համար. Rolls Royce-ի յուրաքանչյուր մեքենա արվեստի գործ է, որը ստեղծվել է նրանց համար, ովքեր գնահատում են շքեղությունն ու անզիջում որակը.';

      // ```.text-more(2)
      document.getElementById('langTxtMoreTwo').innerText = 'Ավելին մանրամասն';

      // ```.text-company-history
      document.getElementById('langTextCompanyHistory').innerText = 'Մայրցամաքում ամենահայտնի մեքենականության արտաքին պարագայություններից մեկը, Rolls-Royce-ը, հիմնադրվել էր ֆրանսական հոբբի Henry Royce-ն և բրիտանաց Charles Rolls-ի կողմից 1906 թվականում: Նրանց համար բացակայում էր հանրագույն՝ 1904 թվականին, ինչպես նաև փոքր շաբաթյա նրանց միանալը ՄԻՈՄ (Institution of Mechanical Engineers) մեքենական մթության պատուհանում, և երկու տարի անց երկուսն էլ միասին ստեղծել նրանց սեփական մարկանը:\n \nԱյսօր Rolls-Royce-ը մի մեծածախ ավտոմեքենային մարկերից մեկն է աշխարհում և շարունակում է կառուցել համակարգիչների սրահատեքստի համար բարեկամականորեն, համակարգիչներով և մոգերով: Վայ Օրինագոլի բոլոր մեքենաները ենթակա երթուղիների նկատմամբ հատկապես բացառությամբ և շատացանկով, իսկ ամեն մեքենա Rolls-Royce-ը անբավարար խհելի աշխարհի մեջ, հասցեները ոչ միանգամով անդրադարձ են և բարձրացուցիչ քայլերի հետ համապատասխան:';

      // ```.characeteristics > li
      
      document.getElementById('langLengthOne').innerText = 'Երկարագույնը: 6,5 մետր';
      document.getElementById('langWidthOne').innerText = 'Լայնություն: 1,9 մետր';
      document.getElementById('langHeightOne').innerText = 'Բարձրություն: 1,6 մետր';
      document.getElementById('langEnginePowerOne').innerText = 'Շարժիչի հզորություն: 563 հիշվողներ';
      document.getElementById('langAccelerationOne').innerText = 'Արագություն 0-100 կմ / ժ: 5,3 վայրկյան';

      document.getElementById('langLengthTwo').innerText = 'Երկարագույնը: 5,5 մետր';
      document.getElementById('langWidthTwo').innerText = 'Լայնություն: 2,1 մետր';
      document.getElementById('langHeightTwo').innerText = 'Բարձրություն: 1,6 մետր';
      document.getElementById('langEnginePowerTwo').innerText = 'Շարժիչի հզորություն: 563 հիշվողներ';
      document.getElementById('langAccelerationTwo').innerText = 'Արագություն 0-100 կմ / ժ: 4,5 վայրկյան';

      document.getElementById('langLengthThree').innerText = 'Երկարագույնը: 5,3 մետր';
      document.getElementById('langWidthThree').innerText = 'Լայնություն: 1,9 մետր';
      document.getElementById('langHeightThree').innerText = 'Բարձրություն: 1,5 մետր';
      document.getElementById('langEnginePowerThree').innerText = 'Շարժիչի հզորություն: 601 հիշվողներ';
      document.getElementById('langAccelerationThree').innerText = 'Արագություն 0-100 կմ / ժ: 4,9 վայրկյան';
  
      // ```.txt-card
      document.getElementById('langTxtCardOne').innerText = 'Հիմնական բարձր մակարդակի սալոն ձեռքով արտադրված է, ընտրելի ձայնաստանով համակարգ 18 շարժիչներով, բարձր հարաբերության և անվտանգության տեխնոլոգիաներով';
      document.getElementById('langTxtCardTwo').innerText = 'Spectre-ը ունի չորս էլեկտրական մոտոր, որոնք ընդհանուր արագությունով 585 ինչ-որ հոռոչական արագության ուժգիծ են: Գործաշրջանի տրանսֆորմատորի պատմությունը համարվում է 120 կՎտ∙ժ, և շեղումի մոտակա ընդհանուր հեռավորությունը ընդժամկետանքի WLTP ցիկլի համարով կազմում է 520 կմ:';
      document.getElementById('langTxtCardThree').innerText = 'Էլեգանտ, հանդիպական, աթլետիկ, պալատին, թույլատրելի - դրա այցելությունը կարեւորագիրը բրիտանական մարկանի բնության համար բնության հանդիսացող տեսական հատկերով։';

      // ```txt-more(3)
      document.getElementById('langTxtMoreThree').innerText = 'Ավելին մանրամասն';
      document.getElementById('langTxtMoreFour').innerText = 'Ավելին մանրամասն';
      document.getElementById('langTxtMoreFive').innerText = 'Ավելին մանրամասն';

      // ```text-soe
      document.getElementById('langTextSoe').innerText = 'Համակարգով բացիանում: Երկրորդ շարքում եք կողքով տեղի ունեցել պարերիս անիմենտ՝ "Էքստազի ոսկե ճակատ"։ Գարենանումը իրացվում է համաշխարհին միլենիով հանրահայտ «կողքի անցումի»ն ըստ օրվա սկզբնական տարբերակի: Տեխնոլոգիայի համար պետք է կողմերը կողմերից զգալ, որպեսզի հանել պրոցեսն ավարտում կատարվող արագածի պատուհանին: Այս բանաձևով հետո, ովքեր էք "Էքստազի ոսկե ճակատ" պարերից մեկի համար, ոչ միայն պիտակները կազմվում են միմյանց։';

      // ```.txt-more
      document.getElementById('langTxtCreateCar').innerText = 'Ստեղծեք ձեր մուտքը ձեր էջում';

      // ```.txt-more(6)Ավելին մանրամասն
      document.getElementById('langTxtmoreSix').innerText = 'Ավելին մանրամասն';

      // ```.txt-share
  
      document.getElementById('langTxtShare').innerText = 'Տարածել';
 }
 
 
}