var fbButton = document.getElementById('fb-share-button');
var likeBtn = document.getElementById('likeBtn');
var url = window.location.href;

fbButton.addEventListener('click', function() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url,
        'facebook-share-dialog',
        'width=600,height=600'
    );
    return false;
});

likeBtn.addEventListener('click', function() {
    window.open('https://www.facebook.com/profile.php?id=100092498614694',
        'facebook-share-dialog',
        'width=600,height=600'
    );
    return false;
});