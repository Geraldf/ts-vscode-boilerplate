
class ExpressError extends Error {
  public status: number;

  constructor(public message: string) {
    super(message);
  }
}
