const images = {};

const requireContext = require.context(
    './', // since you're already in the coffee folder
    false,
    /\.webp$/
);

requireContext.keys().forEach((key) => {
    const fileName = key.replace('./', '');
    images[fileName] = requireContext(key);
});

export default images;
