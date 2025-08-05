const getTokenClass = (type: string) => {
  if (type.startsWith("KEYWORD")) return "token-keyword";
  if (type === "IDENTIFIER") return "token-identifier";
  if (type === "INT_LITERAL") return "token-int";
  if (
    type === "PLUS" ||
    type === "MINUS" ||
    type === "MULTIPLY" ||
    type === "DIVIDE" ||
    type === "ASSIGN" ||
    type === "SEMICOLON" ||
    type === "LEFT_PAREN" ||
    type === "RIGHT_PAREN" ||
    type === "LEFT_BRACK" ||
    type === "RIGHT_BRACK"
  )
    return "token-symbol";
  if (type === "EOF") return "token-eof";
  return "";
};

export const TokenListContent = () => {
  {/* Example token lines for demonstration purposes */}
  const tokenLines = [
    {
      line: 1,
      tokens: [
        { type: "KEYWORD_INT", lexeme: "int", column: 1 },
        { type: "IDENTIFIER", lexeme: "main", column: 5 },
        { type: "LEFT_PAREN", lexeme: "(", column: 9 },
        { type: "RIGHT_PAREN", lexeme: ")", column: 10 },
        { type: "LEFT_BRACK", lexeme: "{", column: 12 },
      ],
    },
    {
      line: 2,
      tokens: [
        { type: "KEYWORD_RETURN", lexeme: "return", column: 3 },
        { type: "INT_LITERAL", lexeme: "42", column: 10 },
        { type: "SEMICOLON", lexeme: ";", column: 12 },
      ],
    },
    {
      line: 3,
      tokens: [{ type: "RIGHT_BRACK", lexeme: "}", column: 1 }],
    },
    {
      line: 4,
      tokens: [{ type: "EOF", lexeme: "", column: 1 }],
    },
  ];

  return (
    <div className="text-sm font-mono space-y-1 px-2">
      {tokenLines.map(({ line, tokens }) => (
        <div key={line}>
          <span className="text-muted-foreground pr-2 w-6 inline-block">
            {line}
          </span>
          {tokens.map((t, i) => (
            <span key={i} title={`Column ${t.column}`} className="mr-2">
              <span className={getTokenClass(t.type)}>{t.type}(</span>
              <span className="text-foreground">{t.lexeme}</span>
              <span className={getTokenClass(t.type)}>)</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};
