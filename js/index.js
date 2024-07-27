"use strict";

const API = "../data/data.json";
const fetchData = async function (){
  const getRes = await fetch(API);
  const data = await getRes.json();

  if(getRes.ok){
    showData(data);
  } else {
    alert('Couldnt get data');
  }
}
fetchData();

const table = document.querySelector(".table-deviz-grid");
const devizYears = document.getElementById("years");
const devizMonths = document.getElementById("months");
const addDevizBtn = document.querySelector(".add-deviz-btn");
const searchInput = document.querySelector(".input-search");
const searchBtn = document.querySelector(".btn-search");

const mainRowTable = `<div class="row description-titles">
    <div>#Deviz</div>
    <div>factura</div>
    <div>companie</div>
    <div>camion</div>
    <div>valoare</div>
    <div>tools</div>
</div>`;

// row for table
const rowTable = `<div class="row">
    <div>#Deviz</div>
    <div>324</div>
    <div>companie</div>
    <div>camion</div>
    <div>valoare</div>
    <div class="tools"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M481.429 332.892c-26.337-26.357-62.882-37.523-109.815-24.945L204.256 140.419l2.212-8.364c9.639-36.166-.776-75.041-27.172-101.437C152.42 3.721 114.212-6.148 78.077 3.778a14.996 14.996 0 0 0-10.529 10.631 15.001 15.001 0 0 0 3.909 14.438l40.297 40.297c11.781 11.81 11.666 30.724.029 42.392-11.545 11.576-30.951 11.558-42.45.029L29.028 71.257a14.993 14.993 0 0 0-14.454-3.891A14.993 14.993 0 0 0 3.962 77.917c-9.781 35.738-.159 74.183 26.846 101.188 26.326 26.345 62.825 37.551 109.786 24.946l167.371 167.528c-12.49 46.919-1.716 83.11 24.975 109.801 26.91 26.93 65.136 36.726 101.192 26.833a14.999 14.999 0 0 0 10.532-10.631 14.998 14.998 0 0 0-3.909-14.44l-40.288-40.288c-11.781-11.81-11.666-30.726-.029-42.392 11.689-11.629 31.052-11.444 42.45-.015l40.308 40.297a14.996 14.996 0 0 0 14.453 3.889 14.995 14.995 0 0 0 10.611-10.549c9.781-35.732.161-74.187-26.831-101.192z" fill="#000000" data-original="#000000" class=""></path><path d="M160.551 266.584 17.559 409.594c-23.401 23.401-23.401 61.455 0 84.855 23.401 23.401 61.455 23.401 84.855 0l142.989-143.006-84.852-84.859zM88.322 447.898c-5.86 5.86-15.35 5.86-21.21 0-5.859-5.859-5.859-15.351 0-21.21l90.98-90.997c5.859-5.859 15.352-5.859 21.21 0 5.859 5.859 5.859 15.351 0 21.21l-90.98 90.997zM507.596 30.253 481.737 4.394a15 15 0 0 0-18.322-2.258l-79.547 47.723c-8.37 5.021-9.791 16.568-2.891 23.469l6.332 6.33-100.98 100.567 42.435 42.435 100.98-100.567 8.919 8.921c6.901 6.899 18.449 5.479 23.469-2.891l47.723-79.547a15.004 15.004 0 0 0-2.259-18.323z" fill="#000000" data-original="#000000" class=""></path></g></svg> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 682.667 682.667" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><defs><clipPath id="a" clipPathUnits="userSpaceOnUse"><path d="M0 512h512V0H0Z" fill="#000000" data-original="#000000"></path></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)"><path d="M0 0a191.783 191.783 0 0 0 49.719-20.638l15.688 15.69a32.121 32.121 0 0 0 22.727 9.415 32.116 32.116 0 0 0 22.718-9.415l22.718-22.719a32.11 32.11 0 0 0 9.415-22.718 32.113 32.113 0 0 0-9.415-22.726L117.881-88.8a191.838 191.838 0 0 0 20.638-49.719h22.147c17.746 0 32.134-14.388 32.134-32.133v-32.134c0-17.745-14.388-32.133-32.134-32.133h-22.147a191.831 191.831 0 0 0-20.638-49.718l15.689-15.689a32.117 32.117 0 0 0 9.415-22.727 32.11 32.11 0 0 0-9.415-22.718l-22.718-22.718a32.112 32.112 0 0 0-22.718-9.415 32.117 32.117 0 0 0-22.727 9.415L49.719-352.8A191.78 191.78 0 0 0 0-373.437v-22.148c0-17.746-14.388-32.134-32.134-32.134h-32.133c-17.746 0-32.133 14.388-32.133 32.134v22.148a191.78 191.78 0 0 0-49.719 20.637l-15.689-15.689a32.115 32.115 0 0 0-22.726-9.415 32.108 32.108 0 0 0-22.718 9.415l-22.719 22.718a32.114 32.114 0 0 0-9.415 22.718 32.121 32.121 0 0 0 9.415 22.727l15.69 15.689a191.796 191.796 0 0 0-20.638 49.718h-22.147c-17.746 0-32.134 14.388-32.134 32.133v32.134c0 17.745 14.388 32.133 32.134 32.133h22.147A191.803 191.803 0 0 0-214.281-88.8l-15.69 15.689a32.117 32.117 0 0 0-9.415 22.726 32.114 32.114 0 0 0 9.415 22.718l22.719 22.719a32.112 32.112 0 0 0 22.718 9.415 32.119 32.119 0 0 0 22.726-9.415l15.689-15.69A191.783 191.783 0 0 0-96.4 0v22.148c0 17.746 14.387 32.133 32.133 32.133h32.133C-14.388 54.281 0 39.894 0 22.148Z" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(304.2 442.719)" fill="none" stroke="#000000" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path><path d="M0 0c53.205 0 96.4-43.195 96.4-96.4 0-53.204-43.195-96.4-96.4-96.4-53.205 0-96.4 43.196-96.4 96.4C-96.4-43.195-53.205 0 0 0Z" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(256 352.4)" fill="none" stroke="#000000" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path></g></g></svg> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M436 60h-89.185l-9.75-29.238A44.945 44.945 0 0 0 294.379 0h-76.758a44.975 44.975 0 0 0-42.7 30.762L165.182 60H76c-24.814 0-45 20.186-45 45v30c0 16.708 15.041 15 31.183 15H466c8.291 0 15-6.709 15-15v-30c0-24.814-20.186-45-45-45zm-239.187 0 6.57-19.746A14.996 14.996 0 0 1 217.621 30h76.758c6.46 0 12.188 4.116 14.224 10.254L315.18 60H196.813zM64.666 182l23.917 289.072C90.707 494.407 109.97 512 133.393 512h245.215c23.423 0 42.686-17.593 44.824-41.06L447.336 182H64.666zM181 437c0 19.773-30 19.854-30 0V227c0-19.773 30-19.854 30 0v210zm90 0c0 19.773-30 19.854-30 0V227c0-19.773 30-19.854 30 0v210zm90 0c0 19.773-30 19.854-30 0V227c0-8.291 6.709-15 15-15s15 6.709 15 15v210z" fill="#000000" data-original="#000000"></path></g></svg></div>
</div>`;

function showData(data) {
  defaultValueTable(data);
  removeTextNode();

  devizYears.addEventListener("change", () => {
    callAll(data);
    searchInput.value = '';
  });

  devizMonths.addEventListener("change", () => {
    callAll(data);
    searchInput.value = '';
  });

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const filtered = data.filter(item => item.deviz.toLowerCase().includes(searchInput.value.toLowerCase()));
    callAll(filtered);
  });

  function callAll(dataArr){
    differentValues(dataArr);
    defaultValueTable(dataArr);
    caseOne(dataArr);
    caseTwo(dataArr);
    removeTextNode();
  }

  function removeTextNode(){
    const childNodes = document.querySelector('.table-deviz-grid').childNodes;

    for (let i = 0; i < childNodes.length; i++) {
        const node = childNodes[i];

        if (node.nodeType === Node.TEXT_NODE) {
            document.querySelector('.table-deviz-grid').removeChild(node);
        }
    }
  }

  function caseOne(dataArr){
    if (devizMonths.value !== "All" && devizYears.value === "All") {
        table.innerHTML = "";
        table.innerHTML = `
                          ${mainRowTable}
                          ${dataArr.map((item) => {
                            const str = item.deviz;
                            const month = str.substring(
                              str.indexOf(".") + 1,
                              str.lastIndexOf(".")
                            );
  
                            if (devizMonths.value === month) {
                              return `
                                  <div class="row">
                                      <div>${item.deviz}</div>
                                      <div>${item.factura}</div>
                                      <div>${item.companie}</div>
                                      <div>${item.camion}</div>
                                      <div>${item.valoare}</div>
                                      <div class="tools"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M481.429 332.892c-26.337-26.357-62.882-37.523-109.815-24.945L204.256 140.419l2.212-8.364c9.639-36.166-.776-75.041-27.172-101.437C152.42 3.721 114.212-6.148 78.077 3.778a14.996 14.996 0 0 0-10.529 10.631 15.001 15.001 0 0 0 3.909 14.438l40.297 40.297c11.781 11.81 11.666 30.724.029 42.392-11.545 11.576-30.951 11.558-42.45.029L29.028 71.257a14.993 14.993 0 0 0-14.454-3.891A14.993 14.993 0 0 0 3.962 77.917c-9.781 35.738-.159 74.183 26.846 101.188 26.326 26.345 62.825 37.551 109.786 24.946l167.371 167.528c-12.49 46.919-1.716 83.11 24.975 109.801 26.91 26.93 65.136 36.726 101.192 26.833a14.999 14.999 0 0 0 10.532-10.631 14.998 14.998 0 0 0-3.909-14.44l-40.288-40.288c-11.781-11.81-11.666-30.726-.029-42.392 11.689-11.629 31.052-11.444 42.45-.015l40.308 40.297a14.996 14.996 0 0 0 14.453 3.889 14.995 14.995 0 0 0 10.611-10.549c9.781-35.732.161-74.187-26.831-101.192z" fill="#000000" data-original="#000000" class=""></path><path d="M160.551 266.584 17.559 409.594c-23.401 23.401-23.401 61.455 0 84.855 23.401 23.401 61.455 23.401 84.855 0l142.989-143.006-84.852-84.859zM88.322 447.898c-5.86 5.86-15.35 5.86-21.21 0-5.859-5.859-5.859-15.351 0-21.21l90.98-90.997c5.859-5.859 15.352-5.859 21.21 0 5.859 5.859 5.859 15.351 0 21.21l-90.98 90.997zM507.596 30.253 481.737 4.394a15 15 0 0 0-18.322-2.258l-79.547 47.723c-8.37 5.021-9.791 16.568-2.891 23.469l6.332 6.33-100.98 100.567 42.435 42.435 100.98-100.567 8.919 8.921c6.901 6.899 18.449 5.479 23.469-2.891l47.723-79.547a15.004 15.004 0 0 0-2.259-18.323z" fill="#000000" data-original="#000000" class=""></path></g></svg> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 682.667 682.667" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><defs><clipPath id="a" clipPathUnits="userSpaceOnUse"><path d="M0 512h512V0H0Z" fill="#000000" data-original="#000000"></path></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)"><path d="M0 0a191.783 191.783 0 0 0 49.719-20.638l15.688 15.69a32.121 32.121 0 0 0 22.727 9.415 32.116 32.116 0 0 0 22.718-9.415l22.718-22.719a32.11 32.11 0 0 0 9.415-22.718 32.113 32.113 0 0 0-9.415-22.726L117.881-88.8a191.838 191.838 0 0 0 20.638-49.719h22.147c17.746 0 32.134-14.388 32.134-32.133v-32.134c0-17.745-14.388-32.133-32.134-32.133h-22.147a191.831 191.831 0 0 0-20.638-49.718l15.689-15.689a32.117 32.117 0 0 0 9.415-22.727 32.11 32.11 0 0 0-9.415-22.718l-22.718-22.718a32.112 32.112 0 0 0-22.718-9.415 32.117 32.117 0 0 0-22.727 9.415L49.719-352.8A191.78 191.78 0 0 0 0-373.437v-22.148c0-17.746-14.388-32.134-32.134-32.134h-32.133c-17.746 0-32.133 14.388-32.133 32.134v22.148a191.78 191.78 0 0 0-49.719 20.637l-15.689-15.689a32.115 32.115 0 0 0-22.726-9.415 32.108 32.108 0 0 0-22.718 9.415l-22.719 22.718a32.114 32.114 0 0 0-9.415 22.718 32.121 32.121 0 0 0 9.415 22.727l15.69 15.689a191.796 191.796 0 0 0-20.638 49.718h-22.147c-17.746 0-32.134 14.388-32.134 32.133v32.134c0 17.745 14.388 32.133 32.134 32.133h22.147A191.803 191.803 0 0 0-214.281-88.8l-15.69 15.689a32.117 32.117 0 0 0-9.415 22.726 32.114 32.114 0 0 0 9.415 22.718l22.719 22.719a32.112 32.112 0 0 0 22.718 9.415 32.119 32.119 0 0 0 22.726-9.415l15.689-15.69A191.783 191.783 0 0 0-96.4 0v22.148c0 17.746 14.387 32.133 32.133 32.133h32.133C-14.388 54.281 0 39.894 0 22.148Z" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(304.2 442.719)" fill="none" stroke="#000000" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path><path d="M0 0c53.205 0 96.4-43.195 96.4-96.4 0-53.204-43.195-96.4-96.4-96.4-53.205 0-96.4 43.196-96.4 96.4C-96.4-43.195-53.205 0 0 0Z" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(256 352.4)" fill="none" stroke="#000000" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path></g></g></svg> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M436 60h-89.185l-9.75-29.238A44.945 44.945 0 0 0 294.379 0h-76.758a44.975 44.975 0 0 0-42.7 30.762L165.182 60H76c-24.814 0-45 20.186-45 45v30c0 16.708 15.041 15 31.183 15H466c8.291 0 15-6.709 15-15v-30c0-24.814-20.186-45-45-45zm-239.187 0 6.57-19.746A14.996 14.996 0 0 1 217.621 30h76.758c6.46 0 12.188 4.116 14.224 10.254L315.18 60H196.813zM64.666 182l23.917 289.072C90.707 494.407 109.97 512 133.393 512h245.215c23.423 0 42.686-17.593 44.824-41.06L447.336 182H64.666zM181 437c0 19.773-30 19.854-30 0V227c0-19.773 30-19.854 30 0v210zm90 0c0 19.773-30 19.854-30 0V227c0-19.773 30-19.854 30 0v210zm90 0c0 19.773-30 19.854-30 0V227c0-8.291 6.709-15 15-15s15 6.709 15 15v210z" fill="#000000" data-original="#000000"></path></g></svg></div>
                                  </div>`;
                            }
                          })}
                      `;
      }
  }

  function caseTwo(dataArr){
    if (devizYears.value !== "All" && devizMonths.value === "All") {
        table.innerHTML = "";
        table.innerHTML = `
                          ${mainRowTable}
                          ${dataArr.map((item) => {
                            const str = item.deviz;
                            const year = str.substring(str.lastIndexOf(".") + 1);
  
                            if (devizYears.value === year) {
                              return `
                                  <div class="row">
                                      <div>${item.deviz}</div>
                                      <div>${item.factura}</div>
                                      <div>${item.companie}</div>
                                      <div>${item.camion}</div>
                                      <div>${item.valoare}</div>
                                      <div class="tools"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M481.429 332.892c-26.337-26.357-62.882-37.523-109.815-24.945L204.256 140.419l2.212-8.364c9.639-36.166-.776-75.041-27.172-101.437C152.42 3.721 114.212-6.148 78.077 3.778a14.996 14.996 0 0 0-10.529 10.631 15.001 15.001 0 0 0 3.909 14.438l40.297 40.297c11.781 11.81 11.666 30.724.029 42.392-11.545 11.576-30.951 11.558-42.45.029L29.028 71.257a14.993 14.993 0 0 0-14.454-3.891A14.993 14.993 0 0 0 3.962 77.917c-9.781 35.738-.159 74.183 26.846 101.188 26.326 26.345 62.825 37.551 109.786 24.946l167.371 167.528c-12.49 46.919-1.716 83.11 24.975 109.801 26.91 26.93 65.136 36.726 101.192 26.833a14.999 14.999 0 0 0 10.532-10.631 14.998 14.998 0 0 0-3.909-14.44l-40.288-40.288c-11.781-11.81-11.666-30.726-.029-42.392 11.689-11.629 31.052-11.444 42.45-.015l40.308 40.297a14.996 14.996 0 0 0 14.453 3.889 14.995 14.995 0 0 0 10.611-10.549c9.781-35.732.161-74.187-26.831-101.192z" fill="#000000" data-original="#000000" class=""></path><path d="M160.551 266.584 17.559 409.594c-23.401 23.401-23.401 61.455 0 84.855 23.401 23.401 61.455 23.401 84.855 0l142.989-143.006-84.852-84.859zM88.322 447.898c-5.86 5.86-15.35 5.86-21.21 0-5.859-5.859-5.859-15.351 0-21.21l90.98-90.997c5.859-5.859 15.352-5.859 21.21 0 5.859 5.859 5.859 15.351 0 21.21l-90.98 90.997zM507.596 30.253 481.737 4.394a15 15 0 0 0-18.322-2.258l-79.547 47.723c-8.37 5.021-9.791 16.568-2.891 23.469l6.332 6.33-100.98 100.567 42.435 42.435 100.98-100.567 8.919 8.921c6.901 6.899 18.449 5.479 23.469-2.891l47.723-79.547a15.004 15.004 0 0 0-2.259-18.323z" fill="#000000" data-original="#000000" class=""></path></g></svg> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 682.667 682.667" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><defs><clipPath id="a" clipPathUnits="userSpaceOnUse"><path d="M0 512h512V0H0Z" fill="#000000" data-original="#000000"></path></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)"><path d="M0 0a191.783 191.783 0 0 0 49.719-20.638l15.688 15.69a32.121 32.121 0 0 0 22.727 9.415 32.116 32.116 0 0 0 22.718-9.415l22.718-22.719a32.11 32.11 0 0 0 9.415-22.718 32.113 32.113 0 0 0-9.415-22.726L117.881-88.8a191.838 191.838 0 0 0 20.638-49.719h22.147c17.746 0 32.134-14.388 32.134-32.133v-32.134c0-17.745-14.388-32.133-32.134-32.133h-22.147a191.831 191.831 0 0 0-20.638-49.718l15.689-15.689a32.117 32.117 0 0 0 9.415-22.727 32.11 32.11 0 0 0-9.415-22.718l-22.718-22.718a32.112 32.112 0 0 0-22.718-9.415 32.117 32.117 0 0 0-22.727 9.415L49.719-352.8A191.78 191.78 0 0 0 0-373.437v-22.148c0-17.746-14.388-32.134-32.134-32.134h-32.133c-17.746 0-32.133 14.388-32.133 32.134v22.148a191.78 191.78 0 0 0-49.719 20.637l-15.689-15.689a32.115 32.115 0 0 0-22.726-9.415 32.108 32.108 0 0 0-22.718 9.415l-22.719 22.718a32.114 32.114 0 0 0-9.415 22.718 32.121 32.121 0 0 0 9.415 22.727l15.69 15.689a191.796 191.796 0 0 0-20.638 49.718h-22.147c-17.746 0-32.134 14.388-32.134 32.133v32.134c0 17.745 14.388 32.133 32.134 32.133h22.147A191.803 191.803 0 0 0-214.281-88.8l-15.69 15.689a32.117 32.117 0 0 0-9.415 22.726 32.114 32.114 0 0 0 9.415 22.718l22.719 22.719a32.112 32.112 0 0 0 22.718 9.415 32.119 32.119 0 0 0 22.726-9.415l15.689-15.69A191.783 191.783 0 0 0-96.4 0v22.148c0 17.746 14.387 32.133 32.133 32.133h32.133C-14.388 54.281 0 39.894 0 22.148Z" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(304.2 442.719)" fill="none" stroke="#000000" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path><path d="M0 0c53.205 0 96.4-43.195 96.4-96.4 0-53.204-43.195-96.4-96.4-96.4-53.205 0-96.4 43.196-96.4 96.4C-96.4-43.195-53.205 0 0 0Z" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(256 352.4)" fill="none" stroke="#000000" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path></g></g></svg> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M436 60h-89.185l-9.75-29.238A44.945 44.945 0 0 0 294.379 0h-76.758a44.975 44.975 0 0 0-42.7 30.762L165.182 60H76c-24.814 0-45 20.186-45 45v30c0 16.708 15.041 15 31.183 15H466c8.291 0 15-6.709 15-15v-30c0-24.814-20.186-45-45-45zm-239.187 0 6.57-19.746A14.996 14.996 0 0 1 217.621 30h76.758c6.46 0 12.188 4.116 14.224 10.254L315.18 60H196.813zM64.666 182l23.917 289.072C90.707 494.407 109.97 512 133.393 512h245.215c23.423 0 42.686-17.593 44.824-41.06L447.336 182H64.666zM181 437c0 19.773-30 19.854-30 0V227c0-19.773 30-19.854 30 0v210zm90 0c0 19.773-30 19.854-30 0V227c0-19.773 30-19.854 30 0v210zm90 0c0 19.773-30 19.854-30 0V227c0-8.291 6.709-15 15-15s15 6.709 15 15v210z" fill="#000000" data-original="#000000"></path></g></svg></div>
                                  </div>`;
                            }
                          })}
                      `;
      }
  }

  function differentValues(dataArr) {
    table.innerHTML = "";
    table.innerHTML = `
                        ${mainRowTable}
                        ${dataArr.map((item) => {
                          const str = item.deviz;
                          const month = str.substring(
                            str.indexOf(".") + 1,
                            str.lastIndexOf(".")
                          );
                          const year = str.substring(str.lastIndexOf(".") + 1);

                          if (
                            devizMonths.value === month &&
                            devizYears.value === year
                          ) {
                            return `
                                <div class="row">
                                    <div>${item.deviz}</div>
                                    <div>${item.factura}</div>
                                    <div>${item.companie}</div>
                                    <div>${item.camion}</div>
                                    <div>${item.valoare}</div>
                                    <div class="tools"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M481.429 332.892c-26.337-26.357-62.882-37.523-109.815-24.945L204.256 140.419l2.212-8.364c9.639-36.166-.776-75.041-27.172-101.437C152.42 3.721 114.212-6.148 78.077 3.778a14.996 14.996 0 0 0-10.529 10.631 15.001 15.001 0 0 0 3.909 14.438l40.297 40.297c11.781 11.81 11.666 30.724.029 42.392-11.545 11.576-30.951 11.558-42.45.029L29.028 71.257a14.993 14.993 0 0 0-14.454-3.891A14.993 14.993 0 0 0 3.962 77.917c-9.781 35.738-.159 74.183 26.846 101.188 26.326 26.345 62.825 37.551 109.786 24.946l167.371 167.528c-12.49 46.919-1.716 83.11 24.975 109.801 26.91 26.93 65.136 36.726 101.192 26.833a14.999 14.999 0 0 0 10.532-10.631 14.998 14.998 0 0 0-3.909-14.44l-40.288-40.288c-11.781-11.81-11.666-30.726-.029-42.392 11.689-11.629 31.052-11.444 42.45-.015l40.308 40.297a14.996 14.996 0 0 0 14.453 3.889 14.995 14.995 0 0 0 10.611-10.549c9.781-35.732.161-74.187-26.831-101.192z" fill="#000000" data-original="#000000" class=""></path><path d="M160.551 266.584 17.559 409.594c-23.401 23.401-23.401 61.455 0 84.855 23.401 23.401 61.455 23.401 84.855 0l142.989-143.006-84.852-84.859zM88.322 447.898c-5.86 5.86-15.35 5.86-21.21 0-5.859-5.859-5.859-15.351 0-21.21l90.98-90.997c5.859-5.859 15.352-5.859 21.21 0 5.859 5.859 5.859 15.351 0 21.21l-90.98 90.997zM507.596 30.253 481.737 4.394a15 15 0 0 0-18.322-2.258l-79.547 47.723c-8.37 5.021-9.791 16.568-2.891 23.469l6.332 6.33-100.98 100.567 42.435 42.435 100.98-100.567 8.919 8.921c6.901 6.899 18.449 5.479 23.469-2.891l47.723-79.547a15.004 15.004 0 0 0-2.259-18.323z" fill="#000000" data-original="#000000" class=""></path></g></svg> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 682.667 682.667" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><defs><clipPath id="a" clipPathUnits="userSpaceOnUse"><path d="M0 512h512V0H0Z" fill="#000000" data-original="#000000"></path></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)"><path d="M0 0a191.783 191.783 0 0 0 49.719-20.638l15.688 15.69a32.121 32.121 0 0 0 22.727 9.415 32.116 32.116 0 0 0 22.718-9.415l22.718-22.719a32.11 32.11 0 0 0 9.415-22.718 32.113 32.113 0 0 0-9.415-22.726L117.881-88.8a191.838 191.838 0 0 0 20.638-49.719h22.147c17.746 0 32.134-14.388 32.134-32.133v-32.134c0-17.745-14.388-32.133-32.134-32.133h-22.147a191.831 191.831 0 0 0-20.638-49.718l15.689-15.689a32.117 32.117 0 0 0 9.415-22.727 32.11 32.11 0 0 0-9.415-22.718l-22.718-22.718a32.112 32.112 0 0 0-22.718-9.415 32.117 32.117 0 0 0-22.727 9.415L49.719-352.8A191.78 191.78 0 0 0 0-373.437v-22.148c0-17.746-14.388-32.134-32.134-32.134h-32.133c-17.746 0-32.133 14.388-32.133 32.134v22.148a191.78 191.78 0 0 0-49.719 20.637l-15.689-15.689a32.115 32.115 0 0 0-22.726-9.415 32.108 32.108 0 0 0-22.718 9.415l-22.719 22.718a32.114 32.114 0 0 0-9.415 22.718 32.121 32.121 0 0 0 9.415 22.727l15.69 15.689a191.796 191.796 0 0 0-20.638 49.718h-22.147c-17.746 0-32.134 14.388-32.134 32.133v32.134c0 17.745 14.388 32.133 32.134 32.133h22.147A191.803 191.803 0 0 0-214.281-88.8l-15.69 15.689a32.117 32.117 0 0 0-9.415 22.726 32.114 32.114 0 0 0 9.415 22.718l22.719 22.719a32.112 32.112 0 0 0 22.718 9.415 32.119 32.119 0 0 0 22.726-9.415l15.689-15.69A191.783 191.783 0 0 0-96.4 0v22.148c0 17.746 14.387 32.133 32.133 32.133h32.133C-14.388 54.281 0 39.894 0 22.148Z" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(304.2 442.719)" fill="none" stroke="#000000" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path><path d="M0 0c53.205 0 96.4-43.195 96.4-96.4 0-53.204-43.195-96.4-96.4-96.4-53.205 0-96.4 43.196-96.4 96.4C-96.4-43.195-53.205 0 0 0Z" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(256 352.4)" fill="none" stroke="#000000" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path></g></g></svg> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M436 60h-89.185l-9.75-29.238A44.945 44.945 0 0 0 294.379 0h-76.758a44.975 44.975 0 0 0-42.7 30.762L165.182 60H76c-24.814 0-45 20.186-45 45v30c0 16.708 15.041 15 31.183 15H466c8.291 0 15-6.709 15-15v-30c0-24.814-20.186-45-45-45zm-239.187 0 6.57-19.746A14.996 14.996 0 0 1 217.621 30h76.758c6.46 0 12.188 4.116 14.224 10.254L315.18 60H196.813zM64.666 182l23.917 289.072C90.707 494.407 109.97 512 133.393 512h245.215c23.423 0 42.686-17.593 44.824-41.06L447.336 182H64.666zM181 437c0 19.773-30 19.854-30 0V227c0-19.773 30-19.854 30 0v210zm90 0c0 19.773-30 19.854-30 0V227c0-19.773 30-19.854 30 0v210zm90 0c0 19.773-30 19.854-30 0V227c0-8.291 6.709-15 15-15s15 6.709 15 15v210z" fill="#000000" data-original="#000000"></path></g></svg></div>
                                </div>`;
                          }
                        })}
                    `;
  }

  function defaultValueTable(dataArr) {
    if (devizYears.value === "All" && devizMonths.value === "All") {
      table.innerHTML = "";
      table.innerHTML = `
      ${mainRowTable}
                ${dataArr.map((item) => {
                  return `
                        <div class="row">
                            <div>${item.deviz}</div>
                            <div>${item.factura}</div>
                            <div>${item.companie}</div>
                            <div>${item.camion}</div>
                            <div>${item.valoare}</div>
                            <div class="tools"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M481.429 332.892c-26.337-26.357-62.882-37.523-109.815-24.945L204.256 140.419l2.212-8.364c9.639-36.166-.776-75.041-27.172-101.437C152.42 3.721 114.212-6.148 78.077 3.778a14.996 14.996 0 0 0-10.529 10.631 15.001 15.001 0 0 0 3.909 14.438l40.297 40.297c11.781 11.81 11.666 30.724.029 42.392-11.545 11.576-30.951 11.558-42.45.029L29.028 71.257a14.993 14.993 0 0 0-14.454-3.891A14.993 14.993 0 0 0 3.962 77.917c-9.781 35.738-.159 74.183 26.846 101.188 26.326 26.345 62.825 37.551 109.786 24.946l167.371 167.528c-12.49 46.919-1.716 83.11 24.975 109.801 26.91 26.93 65.136 36.726 101.192 26.833a14.999 14.999 0 0 0 10.532-10.631 14.998 14.998 0 0 0-3.909-14.44l-40.288-40.288c-11.781-11.81-11.666-30.726-.029-42.392 11.689-11.629 31.052-11.444 42.45-.015l40.308 40.297a14.996 14.996 0 0 0 14.453 3.889 14.995 14.995 0 0 0 10.611-10.549c9.781-35.732.161-74.187-26.831-101.192z" fill="#000000" data-original="#000000" class=""></path><path d="M160.551 266.584 17.559 409.594c-23.401 23.401-23.401 61.455 0 84.855 23.401 23.401 61.455 23.401 84.855 0l142.989-143.006-84.852-84.859zM88.322 447.898c-5.86 5.86-15.35 5.86-21.21 0-5.859-5.859-5.859-15.351 0-21.21l90.98-90.997c5.859-5.859 15.352-5.859 21.21 0 5.859 5.859 5.859 15.351 0 21.21l-90.98 90.997zM507.596 30.253 481.737 4.394a15 15 0 0 0-18.322-2.258l-79.547 47.723c-8.37 5.021-9.791 16.568-2.891 23.469l6.332 6.33-100.98 100.567 42.435 42.435 100.98-100.567 8.919 8.921c6.901 6.899 18.449 5.479 23.469-2.891l47.723-79.547a15.004 15.004 0 0 0-2.259-18.323z" fill="#000000" data-original="#000000" class=""></path></g></svg> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 682.667 682.667" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><defs><clipPath id="a" clipPathUnits="userSpaceOnUse"><path d="M0 512h512V0H0Z" fill="#000000" data-original="#000000"></path></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)"><path d="M0 0a191.783 191.783 0 0 0 49.719-20.638l15.688 15.69a32.121 32.121 0 0 0 22.727 9.415 32.116 32.116 0 0 0 22.718-9.415l22.718-22.719a32.11 32.11 0 0 0 9.415-22.718 32.113 32.113 0 0 0-9.415-22.726L117.881-88.8a191.838 191.838 0 0 0 20.638-49.719h22.147c17.746 0 32.134-14.388 32.134-32.133v-32.134c0-17.745-14.388-32.133-32.134-32.133h-22.147a191.831 191.831 0 0 0-20.638-49.718l15.689-15.689a32.117 32.117 0 0 0 9.415-22.727 32.11 32.11 0 0 0-9.415-22.718l-22.718-22.718a32.112 32.112 0 0 0-22.718-9.415 32.117 32.117 0 0 0-22.727 9.415L49.719-352.8A191.78 191.78 0 0 0 0-373.437v-22.148c0-17.746-14.388-32.134-32.134-32.134h-32.133c-17.746 0-32.133 14.388-32.133 32.134v22.148a191.78 191.78 0 0 0-49.719 20.637l-15.689-15.689a32.115 32.115 0 0 0-22.726-9.415 32.108 32.108 0 0 0-22.718 9.415l-22.719 22.718a32.114 32.114 0 0 0-9.415 22.718 32.121 32.121 0 0 0 9.415 22.727l15.69 15.689a191.796 191.796 0 0 0-20.638 49.718h-22.147c-17.746 0-32.134 14.388-32.134 32.133v32.134c0 17.745 14.388 32.133 32.134 32.133h22.147A191.803 191.803 0 0 0-214.281-88.8l-15.69 15.689a32.117 32.117 0 0 0-9.415 22.726 32.114 32.114 0 0 0 9.415 22.718l22.719 22.719a32.112 32.112 0 0 0 22.718 9.415 32.119 32.119 0 0 0 22.726-9.415l15.689-15.69A191.783 191.783 0 0 0-96.4 0v22.148c0 17.746 14.387 32.133 32.133 32.133h32.133C-14.388 54.281 0 39.894 0 22.148Z" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(304.2 442.719)" fill="none" stroke="#000000" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path><path d="M0 0c53.205 0 96.4-43.195 96.4-96.4 0-53.204-43.195-96.4-96.4-96.4-53.205 0-96.4 43.196-96.4 96.4C-96.4-43.195-53.205 0 0 0Z" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(256 352.4)" fill="none" stroke="#000000" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path></g></g></svg> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M436 60h-89.185l-9.75-29.238A44.945 44.945 0 0 0 294.379 0h-76.758a44.975 44.975 0 0 0-42.7 30.762L165.182 60H76c-24.814 0-45 20.186-45 45v30c0 16.708 15.041 15 31.183 15H466c8.291 0 15-6.709 15-15v-30c0-24.814-20.186-45-45-45zm-239.187 0 6.57-19.746A14.996 14.996 0 0 1 217.621 30h76.758c6.46 0 12.188 4.116 14.224 10.254L315.18 60H196.813zM64.666 182l23.917 289.072C90.707 494.407 109.97 512 133.393 512h245.215c23.423 0 42.686-17.593 44.824-41.06L447.336 182H64.666zM181 437c0 19.773-30 19.854-30 0V227c0-19.773 30-19.854 30 0v210zm90 0c0 19.773-30 19.854-30 0V227c0-19.773 30-19.854 30 0v210zm90 0c0 19.773-30 19.854-30 0V227c0-8.291 6.709-15 15-15s15 6.709 15 15v210z" fill="#000000" data-original="#000000"></path></g></svg></div>
                        </div>`;
                })}
            `;
    }
  }
}

addDevizBtn.addEventListener('click', () => {
    document.querySelector('.modal-add-deviz').classList.add('show');
}); 

document.querySelector('.close-modal').addEventListener('click', () => {
    document.querySelector('.modal-add-deviz').classList.remove('show');
});

const modalInputs = document.querySelectorAll('.modal-add-deviz input');

document.querySelector('.modal-add-deviz button').addEventListener('click', (e) => {
    e.preventDefault();
    let isFilled = true;
    modalInputs.forEach(item => {
        if(item.value === ''){
            isFilled = false;
            return;
        }
    });
    if(isFilled){
        alert('Thx, but this job is for backend dev :))');
    } else {
        alert('Please fill all inputs');
    }
});
