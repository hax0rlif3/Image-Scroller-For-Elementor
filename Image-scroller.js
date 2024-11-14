<script>
document.addEventListener("DOMContentLoaded", function () {
  // Select all images with the scroll-image class
  const scrollImages = document.querySelectorAll(".scroll-image");

  scrollImages.forEach(image => {
    const container = image.parentElement;

    // Ensure the image is fully loaded before calculating height
    image.addEventListener("load", function () {
      const containerHeight = container.clientHeight;
      const imageHeight = image.clientHeight;

      // Check if image is taller than the container
      if (imageHeight > containerHeight) {
        // Add hover effect to scroll the image
        container.addEventListener("mouseenter", function () {
          const scrollDistance = imageHeight - containerHeight;
          image.style.transition = `transform ${scrollDistance / 100}s linear`;
          image.style.transform = `translateY(-${scrollDistance}px)`;
        });

        // Reset the image position on mouse leave
        container.addEventListener("mouseleave", function () {
          image.style.transition = 'transform 0.5s ease-out';
          image.style.transform = 'translateY(0)';
        });
      }
    });

    // Trigger load event manually in case the image is cached
    if (image.complete


</script>
