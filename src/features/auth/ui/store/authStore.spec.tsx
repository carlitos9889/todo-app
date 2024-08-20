import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { UserEntity } from "../../domain/entities/UserEntity";
import { useAuthStore } from "./authStore";

describe("useAuthStore", () => {
  let user: UserEntity;

  beforeEach(() => {
    user = { id: "1", name: "John Doe", email: "john.doe@example.com" };
  });

  it("should initialize with undefined user", () => {
    const { result } = renderHook(() => useAuthStore());
    expect(result.current.user).toBeUndefined();
  });

  it("should set user on loginWithEmailAndPassword", () => {
    const { result } = renderHook(() => useAuthStore());

    act(() => {
      result.current.loginWithEmailAndPassword(user);
    });

    expect(result.current.user).toEqual(user);
  });

  it("should clear user on logout", () => {
    const { result } = renderHook(() => useAuthStore());

    act(() => {
      result.current.loginWithEmailAndPassword(user);
      result.current.logout();
    });

    expect(result.current.user).toBeUndefined();
  });

  it("should set user on signInWithPopupWithGoogle", () => {
    const { result } = renderHook(() => useAuthStore());

    act(() => {
      result.current.signInWithPopupWithGooogle(user);
    });

    expect(result.current.user).toEqual(user);
  });

  it("should set user on registerWithEmailAndPassword", () => {
    const { result } = renderHook(() => useAuthStore());

    act(() => {
      result.current.registerWithEmailAndPassword(user);
    });

    expect(result.current.user).toEqual(user);
  });

  it("should update user on onAuthStateChanged", () => {
    const { result } = renderHook(() => useAuthStore());

    act(() => {
      result.current.onAuthStateChanged(user);
    });

    expect(result.current.user).toEqual(user);
  });
});
