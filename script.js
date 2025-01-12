// Select elements
const galleryItems = document.querySelectorAll('.gallery-item img');
const preview = document.getElementById('preview');
const previewImage = document.getElementById('preview-image');
const closeBtn = document.getElementById('close');

// Open preview when an image is clicked
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    previewImage.src = item.src; // Set the image source
    preview.classList.add('active'); // Show the preview modal
  });
});

// Close preview when the close button is clicked
closeBtn.addEventListener('click', () => {
  preview.classList.remove('active');
});

// Close preview when clicking outside the image
preview.addEventListener('click', (e) => {
  if (e.target !== previewImage) {
    preview.classList.remove('active');
  }
});
