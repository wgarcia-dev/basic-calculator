const $mouseFollower = document.querySelector(".mouse-follower");

function handleMove(event) {
  const { clientX, clientY } = event;
  // console.info(clientX, clientY);

  $mouseFollower.style.transform = `translate(${clientX}px, ${clientY}px)`;
}

addEventListener("pointermove", handleMove);
