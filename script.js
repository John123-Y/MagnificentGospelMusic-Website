document.getElementById('download-btn').addEventListener('click', function() {
    
    const audioUrl = 'EMMANUEL.mp3'; 

    
    const link = document.createElement('a');
    link.href = audioUrl;

    
    link.download = 'EMMANUEL.mp3'; 

    document.body.appendChild(link);

    
    link.click();


    document.body.removeChild(link);
});
