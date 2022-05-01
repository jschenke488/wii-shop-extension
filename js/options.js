// Fix page width when opened from extensions settings page or install popup
if (document.location.href.includes('resize=true')) {
    document.querySelector('body').style.width = 'auto';
    document.querySelector('html').style.width = 'auto';
}

chrome.storage.sync.get({
    excludedSites: ''
}, function (data) {
    document.querySelector('#excluded-sites').value = data.excludedSites;
})

document.querySelector('#save-changes-button').addEventListener('click', function () {
    chrome.storage.sync.set({
        excludedSites: document.querySelector('#excluded-sites').value
    });
})
