import React from 'react';

interface TokenListContentProps {
  tokenList: any[];
}

const TokenListContent: React.FC<TokenListContentProps> = ({ tokenList }) => {
  if (!tokenList || tokenList.length === 0) {
    return (
      <div className='w-full h-full flex items-center justify-center'>
        <p className='text-muted-foreground'>No token list available</p>
      </div>
    );
  }

  // Convert tokens to a format suitable for display
  const tokenLines = tokenList.reduce((acc: Record<number, any[]>, token: any) => {  
    if (!acc[token.line]) {
      acc[token.line] = [];
    }
    acc[token.line].push(token);
    return acc;
  }, {});

  const getTokenClass = (type: any): string => {
    const typeStr = type.toString();
    if (typeStr.startsWith('KEYWORD')) return 'token-keyword';
    if (typeStr === 'IDENTIFIER') return 'token-identifier';
    if (typeStr === 'INT_LITERAL') return 'token-int';
    if (
      typeStr === 'PLUS' ||
      typeStr === 'MINUS' ||
      typeStr === 'MULTIPLY' ||
      typeStr === 'DIVIDE' ||
      typeStr === 'ASSIGN' ||
      typeStr === 'SEMICOLON' ||
      typeStr === 'LEFT_PAREN' ||
      typeStr === 'RIGHT_PAREN' ||
      typeStr === 'LEFT_BRACK' ||
      typeStr === 'RIGHT_BRACK'
    )
      return 'token-symbol';
    if (typeStr === 'EOF') return 'token-eof';
    return '';
  };

  return (
    <div className='text-sm font-mono space-y-1 px-2'>
      {Object.entries(tokenLines).map(([line, tokens]) => (
        <div key={line} className='flex flex-wrap'>
          <span className='text-muted-foreground pr-2 w-6 flex-shrink-0'>
            {line}
          </span>
          <div className='flex flex-wrap flex-1'>
            {tokens.map((t: any, i: number) => (
              <span key={i} title={`Column ${t.column}`} className='mr-1 mb-1'>
                <span className={getTokenClass(t.type)}>{t.type.toString()}(</span>
                <span className='text-foreground'>{t.lexeme}</span>
                <span className={getTokenClass(t.type)}>)</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export { TokenListContent };
