
  let circles = [];
  let circleElements = [];

  document.getElementById("btn").addEventListener("click", () => {

    // 👉 If already 2 circles, reset everything
    if (circles.length === 2) {
      circleElements.forEach(el => el.remove());
      circles = [];
      circleElements = [];
      return;
    }

    const radius = 50;
    const x = Math.random() * (window.innerWidth - 2 * radius);
    const y = Math.random() * (window.innerHeight - 2 * radius);

    const circle = document.createElement("div");
    circle.className = "circle";
    circle.style.width = circle.style.height = radius * 2 + "px";
    circle.style.left = x + "px";
    circle.style.top = y + "px";

    document.body.appendChild(circle);

    circleElements.push(circle);
    circles.push({
      x: x + radius,
      y: y + radius,
      r: radius
    });

    // 👉 When second circle is created, check intersection
    if (circles.length === 2) {
      setTimeout(() => {
        checkIntersection(circles[0], circles[1]);
      }, 200); // small delay so user sees both circles
    }
  });

  function checkIntersection(c1, c2) {
    const dx = c2.x - c1.x;
    const dy = c2.y - c1.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance <= c1.r + c2.r) {
      alert("Circles are intersecting ✅");
    } else {
      alert("Circles are NOT intersecting ❌");
    }
  }
