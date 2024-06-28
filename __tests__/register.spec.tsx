import { checkEmail, checkUsername } from "@/app/(auth)/register/handle";
import "@testing-library/jest-dom";


jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"), // If you need actual implementations from next/navigation
  useRouter: () => ({
    pathname: "/mock-path", // Mock pathname or any other property/method your component uses
    query: {}, // Mock query parameters if needed
    push: jest.fn(), // Mock push method if your component uses it
    // Add other properties or methods as needed by your component
  }),
  useSearchParams: () => jest.fn(),
}));


describe("Register Page - Username", () => {
  it("username input should be empty", async () => {
    const result = await checkUsername("");
    expect(result).toEqual("Username cannot be empty");
  }
  )

  it("username input should be less than 3", async () => {
    const result = await checkUsername("ab");
    expect(result).toEqual("Username must be between 3 and 20 characters long and can only contain letters, numbers, underscores, and hyphens");
  }
  )

  it("username input should be more than 20", async () => {
    const result = await checkUsername("abcdefghijklmnopqrstuvwxyz");
    expect(result).toEqual("Username must be between 3 and 20 characters long and can only contain letters, numbers, underscores, and hyphens");
  }
  )

  it("username input should be more have a special character", async () => {
    const result = await checkUsername("ab@91s**=8");
    expect(result).toEqual("Username must be between 3 and 20 characters long and can only contain letters, numbers, underscores, and hyphens");
  }
  )

  it("username input should be valid", async () => {
    const result = await checkUsername("abc123");
    expect(result).toEqual("");
  }
  )

  it("username is already taken", async () => {
    const result = await checkUsername("Dorris55");
    expect(result).toEqual("Username already exists");

  }
  )
}
)


describe("Register Page - Email", () => {
  it("email input should be empty", async () => {
    const result = await checkEmail("");
    expect(result).toEqual("Email cannot be empty");
  }
  )

  it("email input should be invalid", async () => {
    const result = await checkEmail("ab");
    expect(result).toEqual("Invalid email");
  }
  )



  it("email input should be valid", async () => {
    const result = await checkEmail("abc123@gmail.com");
    expect(result).toEqual("");
  }
  )

  it("email is already taken", async () => {
    const result = await checkEmail("Davonte30@gmail.com");
    expect(result).toEqual("Email already exists");

  }
  )
}
)