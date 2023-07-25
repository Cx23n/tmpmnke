// Only run in frame, not iframe
if (window.top !== window.self) { 
    // Only load code when full page load
    document.addEventListener('DOMContentLoaded', () => {
    // window.addEventListener('load', () => {


        
        // Interesting function to read external data
        GM_xmlhttpRequest({
            method: 'GET',
            responseType: 'blob',
            url: '', // <- TODO
            onload: function (response) {
                let blob;
                if (response.response instanceof Blob) {
                    blob = response.response;
                } else if(response.responseXML instanceof Blob) {
                    blob = response.responseXML;
                } else {
                    console.error('unable to fetch template');
                }
                const fr = new FileReader();
                fr.onload = (e) => {
                    loader.src = e.target.result;
                }
                fr.readAsDataURL(blob);
            },
        });

        
    }, false); // Event Bubbling
}
