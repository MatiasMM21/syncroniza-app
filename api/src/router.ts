import { Router } from 'express';
import authRoutes from './routes/auth.routes';
import projectRoutes from './routes/project.routes';
import planificationRoutes from './routes/planification.routes';
import controlSheetRoutes from './routes/controlSheet.routes';
import transactionRoutes from './routes/transaction.routes';
import bimRoutes from './routes/bim.routes';

const router = Router();

// Rutas de autenticación
router.use('/auth', authRoutes);

// Rutas de proyectos
router.use('/projects', projectRoutes);

// Rutas de planificaciones
router.use('/planifications', planificationRoutes);

// Rutas de hojas de control
router.use('/controlSheets', controlSheetRoutes);

// Rutas de transacciones
router.use('/transactions', transactionRoutes);

// Rutas de BIM
router.use('/bim', bimRoutes);

export default router;
