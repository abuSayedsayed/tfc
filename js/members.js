const memberContainer = document.querySelector('#member-container');


// This Fincton will render member according to the localstorage value

window.onload = function () {
  const members = getData('members');

  let allMemberString = '';

  members.forEach(singleMember => {
    allMemberString += `
        <div
        class="single-member my-2 d-flex flex-column justify-content-center align-items-center bg-light shadow-sm p-md-4  p-2 rounded">
        <div class="member-img my-auto">
          <img src="${singleMember.image ? singleMember.image : '../image/TFC_logo.png'}" class="w-100 my-auto d-block rounded-5" alt="">
        </div>
        <div class="info p-2">
          <p><span class="text-left w-50"><span class="fw-bold">Name :</span> ${singleMember.name}</span><span
              class="text-left ps-2 w-50"><span class="fw-bold">Phone :</span>  ${singleMember.phone}</span></p>
          <p><span><span class="fw-bold">Email :</span> ${singleMember.email} </span><span class="ps-1"><span
                class="fw-bold">Given Money :</span> ${singleMember.givenMoney} </span></p>
          <p><span class="fw-bold">Address :</span>${singleMember.address}  </p>
        </div>
        <div class="actions p-2">
          <i class="bi bi-person-dash-fill my-2 p-2 rounded shadow-sm" role="button"> </i> 
          <i class="bi bi-cash p-2 my-2 rounded shadow-sm" role="button"> </i> 
          <i class="bi bi-cash-coin p-2 my-2 rounded shadow-sm" role="button"> </i> 
        </div>
      </div>
        
        
        `
  });

  memberContainer.innerHTML = allMemberString;

}