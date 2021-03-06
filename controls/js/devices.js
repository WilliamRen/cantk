var gDeviceConfigs = [];
function cantkRegisterDevice(device) {
	gDeviceConfigs.push(dupDeviceConfig(device));

	return;
}

function cantkGetDeviceConfig(name) {
	for(var i = 0; i < gDeviceConfigs.length; i++) {
		var device = gDeviceConfigs[i];
		if(device.name === name) {
			return dupDeviceConfig(device);
		}
	}

	return null;
}

function cantkGetAllDeviceConfig() {
	return gDeviceConfigs;
}

function cantkLoadDefaultDeviceConfigs() {

	var firefoxOSEmulator = {
		name : "firefox-QVGA-Emulator",
		bg: "/drawapp8/images/devices/device_firefoxos.png",
		platform:"firefox",
		version: "4",
		lcdDensity:"mdpi",
		width:390,
		height:754,
		screenX: 34,
		screenY: 138,
		screenW: 320,
		screenH: 480,
		hasMenuBar:false
	};

	var androidWVGA800 = {
		name : "android-WVGA800",
		bg: "/drawapp8/images/devices/device_800x480.png",
		platform:"android",
		version: "4",
		lcdDensity:"hdpi",
		width:600,
		height:1126,
		screenX: 60,
		screenY: 198,
		screenW: 480,
		screenH: 800,
		hasMenuBar:true
	};
	
	var tizenWVGA800 = {
		name : "tizen-WVGA800",
		bg: "/drawapp8/images/devices/device_800x480.png",
		platform:"tizen",
		version: "4",
		lcdDensity:"hdpi",
		width:600,
		height:1126,
		screenX: 60,
		screenY: 198,
		screenW: 480,
		screenH: 800
	};

	var tizenWXGA720 = {
		name : "tizen-WXGA720",
		bg: "/drawapp8/images/devices/device_1280x720.png",
		platform:"tizen",
		version: "4",
		lcdDensity:"xhdpi",
		width:860,
		height:1802,
		screenX: 74,
		screenY: 268,
		screenW: 720,
		screenH: 1280
	};

	var androidWXGA720 = {
		name : "android-WXGA720",
		bg: "/drawapp8/images/devices/device_1280x720.png",
		platform:"android",
		version: "4",
		lcdDensity:"xhdpi",
		width:860,
		height:1802,
		screenX: 74,
		screenY: 268,
		screenW: 720,
		screenH: 1280,
		hasMenuBar:true
	};

	var androidWXGA800 = {
		name : "android-WXGA800",
		bg: "/drawapp8/images/devices/device.png",
		platform: "android",
		version: "4",
		lcdDensity:"mdpi",
		width:1400,
		height:964,
		screenX: 60,
		screenY: 82,
		screenW: 1280,
		screenH: 800,
		hasMenuBar:true
	};
	
	var androidWSVGA = {
		name : "android-WSVGA",
		bg: "/drawapp8/images/devices/device.png",
		platform:"android",
		version: "4",
		lcdDensity:"mdpi",
		width:1130,
		height:764,
		screenX: 60,
		screenY: 82,
		screenW: 1024,
		screenH: 600,
		hasMenuBar:true
	};

	
	var iphone4s = {
		name : "iphone4s",
		bg: "/drawapp8/images/devices/device_iphone4s.png",
		platform: "iphone",
		version: "4s",
		lcdDensity:"xhdpi",
		width:760,
		height:1487,
		screenX: 65,
		screenY: 265,
		screenW: 640,
		screenH: 960,
		hasMenuBar:false
	};
	
	var iphone5 = {
		name : "iphone5",
		bg: "/drawapp8/images/devices/device_iphone5.png",
		platform: "iphone",
		version: "5",
		lcdDensity:"xhdpi",
		width:765,
		height:1600,
		screenX: 65,
		screenY: 238,
		screenW: 640,
		screenH: 1136,
		hasMenuBar:false
	};
	
	var blackberryQ10 = {
		name : "BlackBerry Q10",
		bg: "/drawapp8/images/devices/device_bb_q10.jpg",
		platform: "blackberry",
		version: "10",
		lcdDensity:"xhdpi",
		width:860,
		height:1520,
		screenX: 66,
		screenY: 246,
		screenW: 720,
		screenH: 720,
		hasMenuBar:false
	};
	
	var blackberryZ10 = {
		name : "BlackBerry Z10",
		bg: "/drawapp8/images/devices/device_bb_z10.jpg",
		platform: "blackberry",
		version: "10",
		lcdDensity:"xhdpi",
		width:920,
		height:1820,
		screenX: 72,
		screenY: 258,
		screenW: 768,
		screenH: 1280,
		hasMenuBar:false
	};
	
	var lumia800 = {
		name : "Nokia Lumia 800",
		bg: "/drawapp8/images/devices/device_nokia_lumia_800.jpg",
		platform: "winphone",
		version: "8",
		lcdDensity:"hdpi",
		width:620,
		height:1170,
		screenX: 86,
		screenY: 146,
		screenW: 480,
		screenH: 800,
		hasMenuBar:false
	};
	
	var lumia920 = {
		name : "Nokia Lumia 920",
		bg: "/drawapp8/images/devices/device_nokia_lumia_920.jpg",
		platform: "winphone",
		version: "8",
		lcdDensity:"xhdpi",
		width:1050,
		height:1780,
		screenX: 136,
		screenY: 192,
		screenW: 768,
		screenH: 1280,
		hasMenuBar:false
	};
	
	var ipadmini = {
		name : "iPad Mini",
		bg: "/drawapp8/images/devices/device_ipad_mini.jpg",
		platform: "iphone",
		version: "5",
		lcdDensity:"mdpi",
		width:876,
		height:1290,
		screenX: 52,
		screenY: 132,
		screenW: 768,
		screenH: 1024,
		hasMenuBar:false
	};
	
	var ipad4 = {
		name : "iPad 4",
		bg: "/drawapp8/images/devices/device_ipad_4.jpg",
		platform: "iphone",
		version: "5",
		lcdDensity:"hdpi",
		width:1942,
		height:2542,
		screenX: 198,
		screenY: 238,
		screenW: 1536,
		screenH: 2048,
		hasMenuBar:false
	};
	
	var pcLandscape = {
		name : "PC-Landscape",
		bg: "/drawapp8/images/pc-800x600.png",
		platform: "android",
		version: "4",
		lcdDensity:"hdpi",
		width:860,
		height:720,
		screenX: 32,
		screenY: 78,
		screenW: 800,
		screenH: 600,
		hasMenuBar:false
	};
	
	var pcPortrait = {
		name : "PC-Portrait",
		bg: "/drawapp8/images/pc-480x720.png",
		platform: "android",
		version: "4",
		lcdDensity:"hdpi",
		width:600,
		height:840,
		screenX: 60,
		screenY: 70,
		screenW: 480,
		screenH: 720,
		hasMenuBar:false
	};

	cantkRegisterDevice(iphone4s);
	cantkRegisterDevice(iphone5);
	cantkRegisterDevice(androidWVGA800);
	cantkRegisterDevice(androidWXGA720);
	cantkRegisterDevice(androidWXGA800);
	cantkRegisterDevice(androidWSVGA);
	cantkRegisterDevice(tizenWVGA800);
	cantkRegisterDevice(tizenWXGA720);
	cantkRegisterDevice(firefoxOSEmulator);
	cantkRegisterDevice(blackberryQ10);
	cantkRegisterDevice(blackberryZ10);
	cantkRegisterDevice(lumia800);
	cantkRegisterDevice(lumia920);
	cantkRegisterDevice(ipadmini);
	cantkRegisterDevice(ipad4);
	cantkRegisterDevice(pcLandscape);
	cantkRegisterDevice(pcPortrait);

	return;
}

cantkLoadDefaultDeviceConfigs();
