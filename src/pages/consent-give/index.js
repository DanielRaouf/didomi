import styled from "@emotion/styled";
import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from "@mui/material";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useConsents, useUsersConsents } from "../../data";

const Container = styled(FormGroup)`
    padding: 20px;
`
const GiveConsents = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { list } = useConsents()
    const { addUserConsent } = useUsersConsents()
    const navigate = useNavigate()
    const onSubmit = useCallback(data => {
        addUserConsent(data)
        navigate('/')
    }, [addUserConsent, navigate]);
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Container>
                <TextField error={!!errors.name} {...register("name", { required: true })} data-testid="name" label="Name" variant="standard" />
                <TextField error={!!errors.email} {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} data-testid="email" label="Email address" variant="standard" />
                {list?.map((consent) => <FormControlLabel data-testid={`consent_${consent.id}`} key={consent.id} label={consent.name} control={<Checkbox {...register(`consents.${consent.name}`)} />} />)}
                <Button id='submit_btn' size='large' variant="contained" type="submit" >Give consent</Button>
            </Container>
        </form>
    );
}

export default GiveConsents
