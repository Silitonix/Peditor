class TokenArea
{
  text: string[];

  col: number = 0;
  row: number = 0;

  write(character: string)
  {
    if (character == '\n')
    {
      this.text.push("");
      return;
    }
    let line = this.text[ this.row ];
    line = `${ line?.slice(0, this.col) }${ character }${ line?.slice(0, this.col) }`;
    this.text[ this.row ] = line;
  }

  constructor (text: string)
  {
    const lines = text.split("\n");
    this.text = lines;
  }
}