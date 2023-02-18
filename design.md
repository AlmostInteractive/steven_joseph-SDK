# TheOneApiSdk

## Design Decisions

A  single file JS module SDK with no dependencies (only dev dependencies for testing) written in native JavaScript.  Integration tests are provided by running `npm test`

One thing I don't like about JS classes is that there's no real privacy.  In order to obtain private members or methods we have to encapsulate them within a function scope, which is what I've done. `SdkHelper` is a non-exported function which encapsulates the work done by the SDK and only exposes the interface back to the class, which is then exported for the user to instantiate and use.  Technically the user could access the `_sdk` class member but even then they'd just get access to the public interface, not the private internals.
