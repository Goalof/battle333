import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
	
	<div class="tech-slideshow">
  <div class="mover-1">
    <img src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/BookMyShow%20Logo.svg?v=2020-10-08T16:09:35.971Z">
    <img src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/FedEx%20Logo.svg?v=2020-10-08T16:10:00.266Z">
    <img src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/Microsoft%20Logo.svg?v=2020-10-08T16:03:46.144Z">
    <img src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/Google%20Logo.svg?v=2020-10-08T16:10:37.998Z">
       <img src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/OLA%20logo.svg?v=2020-10-08T16:11:05.061Z">
    <img src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/OYO%20Logo.svg?v=2020-10-08T16:11:30.692Z">
        <img src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/Walmart%20Logo.svg?v=2020-10-08T16:11:55.121Z">
      <img src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/BookMyShow%20Logo.svg?v=2020-10-08T16:09:35.971Z">
    <img src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/FedEx%20Logo.svg?v=2020-10-08T16:10:00.266Z">
    <img src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/Microsoft%20Logo.svg?v=2020-10-08T16:03:46.144Z">
    <img src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/Google%20Logo.svg?v=2020-10-08T16:10:37.998Z">
       <img src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/OLA%20logo.svg?v=2020-10-08T16:11:05.061Z">
    <img src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/OYO%20Logo.svg?v=2020-10-08T16:11:30.692Z">
        <img src="https://uploads.quarkly.io/5f7f2dc68a25ab001e4e6f6a/images/Walmart%20Logo.svg?v=2020-10-08T16:11:55.121Z">
  </div>
</div>

<style>
.mover-1 img {
    display: inline-block;
    vertical-align: middle;
    width: 100px;
    margin: 0;
    background: #fff;
    width: 172px;
    height: 96px;
    padding-left: 38px;
    padding-right: 38px;
    border-radius: 16px;
    margin-left: 34px;
}
.tech-slideshow {
  height: 160px;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

}

.mover-1 {
  height: 100px;
  width: 10000px;
  
  position: absolute;
  overflow-x:hidden;
  top: 0;
  left: 0;

  animation: moveSlideshow 13s linear infinite;
}

.mover-1 img {
  display:inline-block;
  vertical-align:middle;
  width:100px;
  margin:0;
}

@keyframes moveSlideshow {
  100% { 
    transform: translateX(-520px);  
  }
}
</style>
	
	
	`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});