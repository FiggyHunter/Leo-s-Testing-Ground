(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function l(i){let o=document.createElement("div");o.id="transitioner",document.body.insertBefore(o,document.body.firstChild),window.getComputedStyle(o).opacity,setTimeout(o.style.opacity=1,500),setTimeout(()=>{window.location=i},2e3)}export{l as i};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY0Y2IyN2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Rldi9zY3JpcHRzL2hlbHBlcnMvaW52b2tlVHJhbnNpdGlvbmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpbnZva2VUcmFuc2l0aW9uZXIobG9jYXRpb24pIHtcbiAgICBsZXQgdHJhbnNpdGlvbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0cmFuc2l0aW9uZXIuaWQgPSBcInRyYW5zaXRpb25lclwiO1xuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKHRyYW5zaXRpb25lciwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0cmFuc2l0aW9uZXIpLm9wYWNpdHk7XG4gICAgc2V0VGltZW91dCggdHJhbnNpdGlvbmVyLnN0eWxlLm9wYWNpdHkgPSAxICwgNTAwICk7XG4gICAgc2V0VGltZW91dCggKCkgPT4geyB3aW5kb3cubG9jYXRpb24gPSBsb2NhdGlvbiB9LCAyMDAwICk7XG59Il0sIm5hbWVzIjpbImludm9rZVRyYW5zaXRpb25lciIsImxvY2F0aW9uIiwidHJhbnNpdGlvbmVyIl0sIm1hcHBpbmdzIjoic3NCQUFPLFNBQVNBLEVBQW1CQyxFQUFVLENBQ3pDLElBQUlDLEVBQWUsU0FBUyxjQUFjLEtBQUssRUFDL0NBLEVBQWEsR0FBSyxlQUNsQixTQUFTLEtBQUssYUFBYUEsRUFBYyxTQUFTLEtBQUssVUFBVSxFQUNqRSxPQUFPLGlCQUFpQkEsQ0FBWSxFQUFFLFFBQ3RDLFdBQVlBLEVBQWEsTUFBTSxRQUFVLEVBQUksR0FBRyxFQUNoRCxXQUFZLElBQU0sQ0FBRSxPQUFPLFNBQVdELENBQVEsRUFBSSxJQUN0RCJ9