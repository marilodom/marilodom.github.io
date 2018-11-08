// Created by iWeb 3.0 local-build-20181108

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-3,3,7,176),url:'Personal_files/stroke.png'},{rect:new IWRect(-5,-8,9,11),url:'Personal_files/stroke_1.png'},{rect:new IWRect(4,-5,194,8),url:'Personal_files/stroke_2.png'},{rect:new IWRect(198,-7,9,10),url:'Personal_files/stroke_3.png'},{rect:new IWRect(198,3,7,176),url:'Personal_files/stroke_4.png'},{rect:new IWRect(198,179,6,10),url:'Personal_files/stroke_5.png'},{rect:new IWRect(4,179,194,10),url:'Personal_files/stroke_6.png'},{rect:new IWRect(-5,179,9,7),url:'Personal_files/stroke_7.png'}],new IWSize(200,182))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Personal_files/PersonalMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');fixupAllIEPNGBGs();Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id2');fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
