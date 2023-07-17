module.exports = function(eleventyConfig) {
 
    eleventyConfig.addPassthroughCopy("img");
  
    eleventyConfig.addPassthroughCopy("**/*.css");
  
   
    eleventyConfig.addPassthroughCopy("**/*.jpg");

    eleventyConfig.addPassthroughCopy("**/*.jpeg");

    
    eleventyConfig.addPassthroughCopy("**/*.png");
  };