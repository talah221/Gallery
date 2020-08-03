'use strict';

$(document).ready(renderGallery)
renderGallery()
function renderGallery() {
    var myProjects = getMyProjects();
    // $('.proj-title-00').text(myProjects[0].title)
    // $('.proj-desc-00').text(myProjects[0].desc)
    // $('.proj-img-00').attr("src", gMyProjects[0].img)
    var str = ''
    myProjects.forEach(function (proj) {
        str += ` <div class="col-md-4 col-sm-6 portfolio-item">
        <a onclick="renderModal('${proj.id}')" class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="${proj.img}" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.title}</h4>
          <p class="text-muted">${proj.desc}</p>
        </div>
      </div>
        `
        var elRow = document.querySelector('.row-father');
        elRow.innerHTML = str
    })

}


function renderModal(projid) {
    var strHTML = ''
    var currProj = findById(projid)
    console.log(currProj);
    strHTML = `
        
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2 class="modal-title-00">${currProj.title}</h2>
                <p class="item-intro text-muted modal-desc-00">${currProj.desc}</p>
                <img class="img-fluid d-block mx-auto" src="${currProj.img}" alt="No Image to show.">
                <p>${currProj.longdesc}</p>
                <ul class="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Threads</li>
                  <li>Category: ${currProj.lables}</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
                    <div><button onClick="window.open('${currProj.url}')" class="btn btn-success mt-3" type="button">GO TO PROJECT</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        `

    document.querySelector('.portfolio-modal').innerHTML = strHTML

}

function onSendEmail(){
  // var userEmail = document.querySelector('.email').value
 var userEmail= $('.email').val()
 var userSubject= $('.subject').val()
 var userMsg= $('.message').val()
sendEmail(userEmail,userSubject,userMsg)
$('.email').val('')
$('.subject').val('')
$('.message').val('')

}
