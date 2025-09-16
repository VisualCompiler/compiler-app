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
  const tokenLines = tokenList
    .filter(token => token && token.type && token.lexeme !== undefined) // Filter out invalid tokens
    .reduce((acc: Record<number, any[]>, token: any) => {  
      // Use location.startLine instead of token.line
      const lineNumber = token.location?.startLine || 0;
      if (!acc[lineNumber]) {
        acc[lineNumber] = [];
      }
      acc[lineNumber].push(token);
      return acc;
    }, {});

  const getTokenClass = (type: any): string => {
    const typeStr = type.toString();
    
    // Keywords
    if (typeStr.startsWith('KEYWORD_')) return 'token-keyword';
    if (typeStr === 'IF' || typeStr === 'ELSE' || typeStr === 'GOTO') return 'token-keyword';
    
    // Identifiers and literals
    if (typeStr === 'IDENTIFIER') return 'token-identifier';
    if (typeStr === 'INT_LITERAL') return 'token-int';
    
    // Binary operators
    if (typeStr === 'PLUS' || typeStr === 'MULTIPLY' || typeStr === 'DIVIDE' || typeStr === 'REMAINDER') return 'token-operator';
    
    // Logical operators
    if (typeStr === 'AND' || typeStr === 'OR') return 'token-logical';
    
    // Relational operators
    if (typeStr === 'LESS' || typeStr === 'GREATER' || typeStr === 'LESS_EQUAL' || typeStr === 'GREATER_EQUAL') return 'token-relational';
    
    // Unary operators
    if (typeStr === 'TILDE' || typeStr === 'NOT' || typeStr === 'NEGATION' || typeStr === 'DECREMENT') return 'token-unary';
    
    // Assignment and comparison
    if (typeStr === 'ASSIGN' || typeStr === 'EQUAL_TO' || typeStr === 'NOT_EQUAL') return 'token-assignment';
    
    // Symbols and punctuation
    if (
      typeStr === 'SEMICOLON' ||
      typeStr === 'LEFT_PAREN' ||
      typeStr === 'RIGHT_PAREN' ||
      typeStr === 'LEFT_BRACK' ||
      typeStr === 'RIGHT_BRACK' ||
      typeStr === 'QUESTION_MARK' ||
      typeStr === 'COLON'
    ) return 'token-symbol';
    
    if (typeStr === 'EOF') return 'token-eof';
    return '';
  };

  return (
    <div className='text-sm font-mono space-y-1 p-2'>
      {Object.entries(tokenLines)
        .filter(([line]) => line && line !== 'undefined' && !isNaN(Number(line))) // Filter out invalid line numbers
        .sort(([a], [b]) => Number(a) - Number(b)) // Sort by line number
        .map(([line, tokens]) => (
        <div key={line} className='flex flex-wrap'>
          <span className='text-muted-foreground pr-2 w-6 flex-shrink-0'>
            {line}
          </span>
          <div className='flex flex-wrap flex-1'>
            {tokens.map((t: any, i: number) => (
              <span key={i} title={`Column ${t.location?.startCol || 'N/A'}`} className='mr-1 mb-1'>
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
