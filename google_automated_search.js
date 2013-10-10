//CHANGE THE ARRAY VALUES FOR YOUR OWN CUSTOM AUTO-SEARCH
var array=["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"];
for(var i=0; i<array.length; i++){
var MyMacroCode="CODE:";
MyMacroCode=MyMacroCode+"VERSION BUILD=6700624 RECORDER=FX\n ";
MyMacroCode=MyMacroCode+"TAB T=1\n";
MyMacroCode=MyMacroCode+"SET !TIMEOUT 240\n";
MyMacroCode=MyMacroCode+"SET !ERRORIGNORE YES\n";
MyMacroCode=MyMacroCode+"SET !EXTRACT_TEST_POPUP NO\n";
MyMacroCode=MyMacroCode+"FILTER TYPE=IMAGES STATUS=ON\n";
MyMacroCode=MyMacroCode+"CLEAR\n";
MyMacroCode=MyMacroCode+"TAB CLOSEALLOTHERS\n";
MyMacroCode=MyMacroCode+"URL GOTO=http://www.google.com"+"\n";
MyMacroCode = MyMacroCode+"TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:gbqf ATTR=ID:gbqfq CONTENT="+array[i]+"\n";
MyMacroCode = MyMacroCode+"TAG POS=1 TYPE=BUTTON ATTR=ID:gbqfb"
iimPlay(MyMacroCode);
}