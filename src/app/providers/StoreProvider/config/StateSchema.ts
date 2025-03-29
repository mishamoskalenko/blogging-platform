import { CounterSchema } from 'entitiess/Counter';
import { UserSchema } from 'entitiess/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema{
    counter: CounterSchema
    user: UserSchema
    loginForm: LoginSchema
}
