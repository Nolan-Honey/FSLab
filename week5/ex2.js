console.log("----System----")
console.log(`Platform: ${process.platform}`)
console.log(`Architecture:${process.platform}`)
console.log(``)
console.log("----NodeJS---")
console.log(`Node Version: ${process.version}`)
console.log(`V8 Version ${process.versions.v8}`)
console.log(`Libuv Version ${process.versions.uv}`)
console.log(``)
console.log("----Processes----")
console.log(`Pid: ${process.ppid}`);
console.log(`Title: ${process.title}`)
console.log(`Current Directory: ${process.cwd()}`)

