gsap.to("#page1 svg",{
    scale:0.1,
    marginTop:"-135px",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top -5%",
        end:"top 0%",
        scrub:2,
        pins:true  
    }
 })
gsap.to("#page1 #page1-img",{
    // marginBottom:"100px",
    // duration:0.5,
    y:130,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top -5%",
        end:"top 0%",
        scrub:2,
        pins:true  
    }
})
gsap.to("#page1 #nav1 h5",{
    // duration:1,
    // visibility: "visible",
    opacity:1,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top -5%",
        end:"top 0%",
        scrub:1,
        // pins:true  
    }
})