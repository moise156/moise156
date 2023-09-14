const ratio=.1;
const option={
	root:null,
	rootMargin:'0px',
	threshold:ratio
}
const callback=function (entries,observer) {
	entries.forEach(entry=>{
		if (entry.intersectionRatio > ratio) {
			observer.unobserve(entry.target)
			entry.target.classList.add('reveler-visible')
		}
		

	})
}
const observer=new IntersectionObserver(callback,option);
document.querySelectorAll('.reveler').forEach(r=>{
	observer.observe(r);
})
