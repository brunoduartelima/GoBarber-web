import React, { useState } from 'react';

import { FiClock, FiPower } from 'react-icons/fi';
import {
    Container,
    Header,
    HeaderContent,
    Profile,
    Content,
    Schedule,
    NextAppointment,
    Section, 
    Appointment,
    Calendar,
} from './styles';

import { useAuth } from '../../hooks/auth';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const { signOut, user } = useAuth();

    return (
        <Container>
            <Header>
                <HeaderContent>
                    <img src={logoImg} alt="GoBarber"/>

                    <Profile>
                        <img src={user.avatar_url} alt={user.name}/>
                        <div>
                            <span>Bem-vindo,</span>
                            <strong>{user.name}</strong>
                        </div>
                    </Profile>

                    <button type="button" onClick={signOut}><FiPower/></button>
                </HeaderContent>
            </Header>

            <Content>
                <Schedule>
                    <h1>Horários agendados</h1>
                    <p>
                        <span>Hoje</span>
                        <span>Dia 06</span>
                        <span>Segunda-feira</span>
                    </p>

                    <NextAppointment>
                        <strong>Atendimento a seguir</strong>
                        <div>
                            <img src="https://avatars.githubusercontent.com/u/60904531?s=460&u=5768e084645b4b214c1d629d9da36a777b542f4d&v=4" alt="Bruno Lima"/>
                            <strong>Bruno Lima</strong>
                            <span>
                                <FiClock/>
                                08:00
                            </span>
                        </div>
                    </NextAppointment>

                    <Section>
                        <strong>Manhã</strong>

                        <Appointment>
                            <span>
                                <FiClock/>
                                08:00
                            </span>

                            <div>
                                <img src="https://avatars.githubusercontent.com/u/60904531?s=460&u=5768e084645b4b214c1d629d9da36a777b542f4d&v=4" alt="Bruno Lima"/>
                                <strong>Bruno Lima</strong> 
                            </div>
                        </Appointment>

                        <Appointment>
                            <span>
                                <FiClock/>
                                08:00
                            </span>

                            <div>
                                <img src="https://avatars.githubusercontent.com/u/60904531?s=460&u=5768e084645b4b214c1d629d9da36a777b542f4d&v=4" alt="Bruno Lima"/>
                                <strong>Bruno Lima</strong> 
                            </div>
                        </Appointment>
                    </Section>
                    
                    <Section>
                        <strong>Tarde</strong>

                        <Appointment>
                            <span>
                                <FiClock/>
                                08:00
                            </span>

                            <div>
                                <img src="https://avatars.githubusercontent.com/u/60904531?s=460&u=5768e084645b4b214c1d629d9da36a777b542f4d&v=4" alt="Bruno Lima"/>
                                <strong>Bruno Lima</strong> 
                            </div>
                        </Appointment>
                    </Section>

                </Schedule>
                <Calendar />
            </Content>
        </Container>
    );
};

export default Dashboard;