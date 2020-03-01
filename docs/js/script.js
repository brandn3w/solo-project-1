
const mobileMenu = document.querySelector('.sidenav');
const hamburgerMobile = document.querySelector('.mobile__hamburger');
const hamburger = document.querySelector('.hamburger');


hamburgerMobile.addEventListener('click', function(){
   mobileMenu.classList.toggle('active');
});

hamburger.addEventListener('click', function(){
  mobileMenu.classList.toggle('active');
});

//datepicker

$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});

//chart

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    datasets: [{
      label: 'Signups',
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
      hidden: true,
    }]
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
  }
});

//modal

const modal = document.querySelector('.bg-modal');
const loginBtn = document.querySelector('.user');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove('active');
  }

loginBtn.addEventListener('click', function(){
modal.classList.add('active');
});

}

//sidebar menu

const link = document.querySelector('.navigation__list .navigation__item a');
const linkContainer =  document.querySelector('.navigation__list mobile-menu');

// link.addEventListener('click', function(){
// link.classList.toggle('active');
// });



for (var i=0; i < link.length; i++)
linkContainer[i].addEventListener('click', function(){

  if (link[0].classList.contains('active')) {
    link.classList.remove('active');
  }else{  
  link.classList.add('active');
};
//   var activeLink = document.querySelector('.navigation__item.active');
  
// if (activeLink) activeLink.classList.remove('active');
// this.parentNode.classList.add('active');
// });

})

