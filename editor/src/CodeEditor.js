import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { cpp } from '@codemirror/lang-cpp';

const CodeEditor = () => {
    const onChange = React.useCallback((val, viewUpdate) => {
        console.log('val:', val);

    }, []);

    return (
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
        <CodeMirror
            value={`#include <stdio.h>\n\nint main() {\n  printf("Hello, World!\\n");\n  return 0;\n}`}
            height="200px"
            extensions={[cpp()]}
            onChange={onChange}
            theme="light"
        />
        </div>
    );
};

export default CodeEditor;