import { TokenExpiredError, sign, verify, decode } from 'jsonwebtoken';

export class JwtAdapter {
  constructor(private readonly secret: string) {}

  async encrypt(
    plaintext: string,
    nameUser?: string,
    expiresIn?: string
  ): Promise<{
    token: string;
    iatDate?: Date;
    expDate?: Date;
  }> {
    const token = sign({ id: plaintext, name: nameUser }, this.secret, { expiresIn });
    const payload = decode(token, { json: true });

    return {
      token,
      iatDate: !payload?.iat ? undefined : new Date(payload.iat * 1000) ?? undefined,
      expDate: !payload?.exp ? undefined : new Date(payload.exp * 1000) ?? undefined,
    };
  }

  async decrypt(ciphertext: string): Promise<{
    name?: string;
    id: string;
  }> {
    try {
      const { name, id } = verify(ciphertext, this.secret) as { id: string; name?: string };
      return { name, id };
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        throw new Error('Token expirado');
      } else {
        throw new Error('Erro ao decodificar o token');
      }
    }
  }
}
