const banner = document.getElementById('frontphoto')
const content = document.getElementById('content')
const contents = document.getElementsByClassName('content')
const tabs = document.getElementsByClassName('tab')
const mainpage = document.getElementById('mainpage')

function restoreTab(item) {
    item.classList.remove('tab-active')
}

function hideContent(item) {
    item.style.display = "none"
}

function showContent(item) {
    item.style.display = ""
}

function restoreTabs(exception) {
    Array.prototype.forEach.call(tabs, (item) => {
        if (item.id != exception.id) {
            restoreTab(item)
        }

    })

    Array.prototype.forEach.call(contents, (item) => {
        if (item.id != exception.id) {
            hideContent(item)
        }

    })
}

function activeTab(item) {
    item.classList.add('tab-active')
    banner.src = `imgs/banner_${item.id}.jpg`

    Array.prototype.forEach.call(contents, (el) => {
        console.log("el", el.id)
        if (el.id == `${item.id}_content`) {
            showContent(el)
        }
    })
}


function setTabs() {
    'use strict'
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', () => {
            restoreTabs(tabs[i])
            activeTab(tabs[i])

        })
    }

}

setTabs()
restoreTabs()
activeTab(mainpage)