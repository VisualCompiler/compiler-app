// Initialize keystone and add it to the window object
(function() {
  'use strict';
  
  console.log('init-keystone.js starting...');
  
  // Wait for keystone to be available
  function initKeystone() {
    console.log('Checking for Keystone...');
    console.log('window.Keystone:', window.Keystone);
    console.log('window.MKeystone:', window.MKeystone);
    console.log('typeof Keystone:', typeof Keystone);
    console.log('typeof window.Keystone:', typeof window.Keystone);
    console.log('typeof window.MKeystone:', typeof window.MKeystone);
    
    // Check if Keystone is available and fully initialized
    if (typeof Keystone !== 'undefined') {
      console.log('Keystone found, initializing...');
      
      // Create the ks object with all the necessary constants and constructor
      window.ks = {
        // Architecture constants
        ARCH_ARM: 1,
        ARCH_ARM64: 2,
        ARCH_MIPS: 3,
        ARCH_X86: 4,
        ARCH_PPC: 5,
        ARCH_SPARC: 6,
        ARCH_SYSTEMZ: 7,
        ARCH_HEXAGON: 8,
        ARCH_EVM: 9,
        
        // Mode constants
        MODE_LITTLE_ENDIAN: 0,
        MODE_BIG_ENDIAN: 1073741824,
        MODE_ARM: 0,
        MODE_THUMB: 16,
        MODE_V8: 64,
        MODE_MICRO: 16,
        MODE_MIPS3: 64,
        MODE_MIPS32R6: 128,
        MODE_MIPS32: 0,
        MODE_MIPS64: 32,
        MODE_16: 2,
        MODE_32: 4,
        MODE_64: 8,
        MODE_PPC32: 0,
        MODE_PPC64: 64,
        MODE_QPX: 16,
        MODE_SPARC32: 0,
        MODE_SPARC64: 16,
        MODE_V9: 32,
        
        // Option constants
        OPT_SYNTAX: 1,
        OPT_SYNTAX_ATT: 0,
        OPT_SYNTAX_INTEL: 1,
        OPT_SYNTAX_NASM: 2,
        OPT_SYNTAX_MASM: 4,
        OPT_SYNTAX_GAS: 8,
        OPT_SYNTAX_RADIX16: 16,
        
        // Keystone constructor
        Keystone: Keystone
      };
    }
}
  
  // Wait a bit longer for the keystone script to fully execute
  setTimeout(initKeystone, 500);
})();
